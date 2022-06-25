import { getCleanedNumber } from '../../../../utils/utils';
import '../inputs-styles.css';
import './range-styles.css';

interface FirstDepositeProps {
  price: string;
  setDeposite: (arg: string) => void;
  deposite: string,
  minPercent: number,
}

export default function FirstDeposite({price, setDeposite, deposite, minPercent}: FirstDepositeProps) {
  const currentPrice = getCleanedNumber(price);
  const currentDeposite = getCleanedNumber(deposite);
  const smallestDeposite = currentPrice * (minPercent / 100);
  const isError = (currentDeposite < smallestDeposite) || (currentDeposite >= currentPrice) || currentPrice === 0;
  const priceToDepositePercent = Math.round((currentDeposite / currentPrice) * 100);
  const smallestPercent = Math.round((smallestDeposite / currentPrice) * 100);
  const formattedMinValue = Math.round(smallestDeposite).toLocaleString();
  const formattedMaxValue = Math.round(currentPrice).toLocaleString();
  const labelMessage = `Первоначальный взнос ${isError ? `не может быть < ${formattedMinValue} или >= ${formattedMaxValue}` : ''}`;

  return (
    <div className="input-wrapper">
      <label className="price-label" htmlFor="input-deposit">
        {labelMessage}
      </label>
      <input
        type="text"
        id="input-deposit"
        className="price-deposite"
        value={deposite}
        aria-labelledby="Поле ввода первоначального взноса"
        onFocus={() => setDeposite('')}
        onBlur={() =>
          isError
            ? setDeposite(`${Math.round(smallestDeposite).toLocaleString()} рублей`)
            : setDeposite(`${(Math.round(+deposite)).toLocaleString()} рублей`)}
        onChange={({ target }) => {
          if (/^\d+$/gi.test(target.value)) {
            if (+target.value <= currentPrice) {
              setDeposite(target.value);
            }}}}
      />
      {currentPrice > currentDeposite && (
        <>
          <input
            type="range"
            className="input-range first-range"
            min={minPercent}
            aria-labelledby="Поле изменения первоначального взноса с помощью range"
            max="100"
            step="5"
            value={priceToDepositePercent}
            onChange={({ target }) => setDeposite(`${Math.round((currentPrice * (+target.value / 100))).toLocaleString()} рублей`)}
          />
          <span className="sub-range">
            {currentDeposite > smallestDeposite
              ? priceToDepositePercent
              : smallestPercent}
            %
          </span>
        </>
      )}
    </div>
  );
}
