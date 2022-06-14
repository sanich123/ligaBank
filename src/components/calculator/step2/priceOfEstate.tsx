import { MAX_PRICE, MIN_PRICE, STEP_PRICE } from '../../../utils/const';
import { getCleanedNumber } from '../../../utils/utils';
import { MinusIcon, PlusIcon } from '../../svg';

interface PriceOfEstateProps {
  price: string,
  setPrice: (arg: string) => void,
}

export default function PriceOfEstate({price, setPrice}: PriceOfEstateProps) {

  const isInvalidInput =
      getCleanedNumber(price) < MIN_PRICE ||
      getCleanedNumber(price) > MAX_PRICE;

  return (
    <div className="input-wrapper">
      <label htmlFor="input-price" className="price-label">
        Стоимость недвижимости
      </label>
      <br />
      <button
        className="price-input__btn minus"
        onClick={() => setPrice(`${(getCleanedNumber(price) - STEP_PRICE).toLocaleString()} рублей`)}
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
        onClick={() => setPrice(`${(getCleanedNumber(price) + STEP_PRICE).toLocaleString()} рублей`)}
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
          : `От ${MIN_PRICE} до ${MAX_PRICE} рублей`}
      </span>
      <br />
    </div>
  );
}
