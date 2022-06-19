import { useEffect } from 'react';
import { getCleanedNumber } from '../../utils/utils';
import { MinusIcon, PlusIcon } from '../svg';

interface CreditPriceProps {
  price: string,
  setPrice: (arg: string) => void,
  minPrice: number,
  maxPrice: number,
  nameOfProduct: string,
  stepOfPrice: number,
  typedDeposite: string,
  setTypedDeposite: (arg: string) => void,
  minPercent: number,
}

export default function CreditPrice({price, setPrice, minPrice, maxPrice, nameOfProduct, stepOfPrice, typedDeposite, setTypedDeposite, minPercent}: CreditPriceProps) {
  const currentPrice = getCleanedNumber(price);
  const currentDeposite = getCleanedNumber(typedDeposite);
  const minDeposite = currentPrice * (minPercent / 100);
  const isInvalidPrice =  currentPrice < minPrice || currentPrice > maxPrice;
  const incrementedPrice = Math.abs((currentPrice + stepOfPrice)).toLocaleString();
  const decrementedPrice = Math.abs((currentPrice - stepOfPrice)).toLocaleString();
  const formattedMinPrice = minPrice.toLocaleString();
  const formattedMaxPrice = maxPrice.toLocaleString();

  useEffect(() => {
    if (minDeposite > currentDeposite && typedDeposite.includes('рублей')) {
      setTypedDeposite(
        `${Math.round(minDeposite).toLocaleString()} рублей`,
      );
    }
  }, [currentDeposite, minDeposite, setTypedDeposite, typedDeposite]);

  const getRightMinMaxPrice = (number: number) => {
    if (number < minPrice) {return minPrice;}
    if (number > maxPrice) {return maxPrice;}
    return number;
  };

  return (
    <div className="input-wrapper">
      <label htmlFor="input-price" className="price-label">
        {`Стоимость ${nameOfProduct} ${isInvalidPrice ? `должна быть от ${formattedMinPrice} до ${formattedMaxPrice}` : ''}`}
      </label>
      <br />
      <button
        className="price-input__btn minus"
        onClick={() => {
          setPrice(`${decrementedPrice} рублей`);

        }}
        aria-label="Кнопка минус"
        type="button"
        tabIndex={0}
        disabled={currentPrice === 100000}
      >
        <MinusIcon />
      </button>
      <input
        style={{ border: `1px solid ${isInvalidPrice ? 'red' : '#1F1E25'}` }}
        id="input-price"
        className="price-input"
        type="text"
        value={price}
        onFocus={() => setPrice('')}
        onBlur={() => setPrice(`${getRightMinMaxPrice(currentPrice).toLocaleString()} рублей`)}
        onChange={({ target }) => {
          if (!target.value) {
            setPrice('');
          }
          if (/^\d+$/gi.test(target.value)) {
            setPrice(target.value);
          }}}
      />
      <button
        onClick={() => {
          setPrice(`${incrementedPrice} рублей`);

        }}
        type="button"
        aria-label="Кнопка плюс"
        className="price-input__btn plus"
        tabIndex={0}
        disabled={currentPrice === maxPrice}
      >
        <PlusIcon />
      </button>
      <br />
      <span
        style={{ color: `${isInvalidPrice ? 'red' : '#707C87'}` }}
        className="sub-input"
      >
        {isInvalidPrice
          ? 'Вы ввели некорректные данные'
          : `От ${formattedMinPrice} до ${formattedMaxPrice} рублей`}
      </span>
      <br />
    </div>
  );
}
