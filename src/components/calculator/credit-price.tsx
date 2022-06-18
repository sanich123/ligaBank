import { getCleanedNumber } from '../../utils/utils';
import { MinusIcon, PlusIcon } from '../svg';

interface CreditPriceProps {
  price: string,
  setPrice: (arg: string) => void,
  minPrice: number,
  maxPrice: number,
  nameOfProduct: string,
  stepOfPrice: number,
}

export default function CreditPrice({price, setPrice, minPrice, maxPrice, nameOfProduct, stepOfPrice}: CreditPriceProps) {
  const currentPrice = getCleanedNumber(price);
  const isInvalidPrice =  currentPrice < minPrice || currentPrice > maxPrice;
  const incrementedPrice = Math.abs((currentPrice + stepOfPrice)).toLocaleString();
  const decrementedPrice = Math.abs((currentPrice - stepOfPrice)).toLocaleString();
  const formattedMinPrice = minPrice.toLocaleString();
  const formattedMaxPrice = maxPrice.toLocaleString();


  return (
    <div className="input-wrapper">
      <label htmlFor="input-price" className="price-label">
        {`Стоимость ${nameOfProduct} ${isInvalidPrice ? `должна быть от ${formattedMinPrice} до ${formattedMaxPrice}` : ''}`}
      </label>
      <br />
      <button
        className="price-input__btn minus"
        onClick={() => setPrice(`${decrementedPrice} рублей`)}
        aria-label="Кнопка минус"
        type="button"
        tabIndex={0}
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
        onBlur={() => setPrice(`${Number(price).toLocaleString()} рублей`)}
        onChange={({ target }) => {
          if (/\d/gi.test(target.value)) {
            setPrice(target.value);
          }}}
      />
      <button
        onClick={() => setPrice(`${incrementedPrice} рублей`)}
        type="button"
        aria-label="Кнопка плюс"
        className="price-input__btn plus"
        tabIndex={0}
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
