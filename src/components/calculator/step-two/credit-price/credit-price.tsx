import { useEffect } from 'react';
import { localRus } from '../../../../utils/const';
import { getCleanedNumber } from '../../../../utils/utils';
import { MinusIcon, PlusIcon } from '../../../icons';
import './../inputs-styles.css';

interface CreditPriceProps {
  price: string,
  setPrice: (arg: string) => void,
  minPrice: number,
  maxPrice: number,
  nameOfProduct: string,
  stepOfPrice: number,
  deposite: string,
  setDeposite: (arg: string) => void,
  minPercent: number,
}

export default function CreditPrice({price, setPrice, minPrice, maxPrice, nameOfProduct, stepOfPrice, deposite, setDeposite, minPercent}: CreditPriceProps) {
  const currentPrice = getCleanedNumber(price);
  const currentDeposite = getCleanedNumber(deposite);
  const minDeposite = currentPrice * (minPercent / 100);
  const isInvalidPrice =  currentPrice < minPrice || currentPrice > maxPrice;
  const incrementedPrice = Math.abs((currentPrice + stepOfPrice)).toLocaleString(localRus);
  const decrementedPrice = Math.abs(currentPrice - stepOfPrice).toLocaleString(localRus);
  const formattedMinPrice = minPrice.toLocaleString(localRus);
  const formattedMaxPrice = maxPrice.toLocaleString(localRus);
  const labelMessage = `Стоимость ${nameOfProduct} ${isInvalidPrice ? `должна быть от ${formattedMinPrice} до ${formattedMaxPrice}` : ''}`;

  useEffect(() => {
    if (minDeposite > currentDeposite && deposite.includes('рублей')) {
      setDeposite(`${Math.round(minDeposite).toLocaleString(localRus)} рублей`);
    }
  }, [currentDeposite, minDeposite, setDeposite, deposite]);

  const getRightMinMaxPrice = (number: number) => {
    if (number < minPrice) {return minPrice;}
    if (number > maxPrice) {return maxPrice;}
    return number;
  };

  return (
    <>
      <h3>Шаг 2. Введите параметры кредита</h3>
      <div className="input-wrapper">
        <label htmlFor="input-price" className="price-label">
          {labelMessage}
        </label>
        <button
          className="price-input__btn minus"
          onClick={() => setPrice(`${decrementedPrice} рублей`)}
          aria-label="Кнопка минус"
          type="button"
          disabled={currentPrice === 100000}
        >
          <MinusIcon />
        </button>
        <input
          style={{ border: `1px solid ${isInvalidPrice ? 'red' : '#1F1E25'}` }}
          id="input-price"
          aria-labelledby="Поле ввода стоимости кредита"
          className="price-input"
          type="text"
          value={price}
          onFocus={() => setPrice('')}
          onBlur={() => setPrice(`${getRightMinMaxPrice(currentPrice).toLocaleString(localRus)} рублей`)}
          onChange={({ target }) => {
            if (!target.value) {
              setPrice('');
            }
            if (/^\d+$/gi.test(target.value)) {
              setPrice(target.value);
            }
          }}
        />
        <button
          onClick={() => setPrice(`${incrementedPrice} рублей`)}
          type="button"
          aria-label="Кнопка плюс"
          className="price-input__btn plus"
          disabled={currentPrice === maxPrice}
        >
          <PlusIcon />
        </button>
        <span
          style={{ color: `${isInvalidPrice ? 'red' : '#707C87'}` }}
          className="sub-input"
        >
          {isInvalidPrice
            ? 'Вы ввели некорректные данные'
            : `От ${formattedMinPrice} до ${formattedMaxPrice} рублей`}
        </span>
      </div>
    </>
  );
}
