import { MAX_CARCREDIT_PRICE, MAX_MORTGAGE_PRICE, MIN_CARCREDIT_PRICE, MIN_MORTGAGE_PRICE, purposesOfCredit, STEP_CARCREDIT_PRICE, STEP_MORTGAGE_PRICE } from '../../../utils/const';
import { getCleanedNumber } from '../../../utils/utils';
import { MinusIcon, PlusIcon } from '../../svg';

interface PriceOfEstateProps {
  price: string,
  setPrice: (arg: string) => void,
  goal: string,
}

export default function PriceOfEstate({goal, price, setPrice}: PriceOfEstateProps) {
  const minPrice = goal !== '' && goal === purposesOfCredit.mortgage ? MIN_MORTGAGE_PRICE : MIN_CARCREDIT_PRICE;
  const maxPrice = goal !== '' && goal === purposesOfCredit.carCredit ? MAX_CARCREDIT_PRICE : MAX_MORTGAGE_PRICE;
  const nameOfProduct = goal !== '' && goal === purposesOfCredit.mortgage ? 'недвижимости' : 'автомобиля';
  const stepPrice = goal !== '' && goal === purposesOfCredit.mortgage ? STEP_MORTGAGE_PRICE : STEP_CARCREDIT_PRICE;

  const isInvalidInput =
      getCleanedNumber(price) < minPrice ||
      getCleanedNumber(price) > maxPrice;

  return (
    <div className="input-wrapper">
      <label htmlFor="input-price" className="price-label">
        Стоимость {nameOfProduct}
      </label>
      <br />
      <button
        className="price-input__btn minus"
        onClick={() => setPrice(`${(getCleanedNumber(price) - stepPrice).toLocaleString()} рублей`)}
        aria-label="Кнопка минус"
        type="button"
        tabIndex={0}
      >
        <MinusIcon />
      </button>
      <input
        style={{ border: `1px solid ${isInvalidInput ? 'red' : '#1F1E25'}` }}
        id="input-price"
        className="price-input"
        type="text"
        value={price}
        onFocus={() => setPrice('')}
        onBlur={() => setPrice(`${Number(price).toLocaleString()} рублей`)}
        onChange={({ target }) => {
          if (!/\D/gi.test(target.value)) {
            setPrice(target.value);
          }}}
      />
      <button
        onClick={() => setPrice(`${(getCleanedNumber(price) + stepPrice).toLocaleString()} рублей`)}
        type="button"
        aria-label="Кнопка плюс"
        className="price-input__btn plus"
        tabIndex={0}
      >
        <PlusIcon />
      </button>
      <br />
      <span
        style={{ color: `${isInvalidInput ? 'red' : '#707C87'}` }}
        className="sub-input"
      >
        {isInvalidInput
          ? 'Вы ввели некорректные данные'
          : `От ${minPrice.toLocaleString()} до ${maxPrice.toLocaleString()} рублей`}
      </span>
      <br />
    </div>
  );
}
