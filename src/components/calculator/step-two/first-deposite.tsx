import { getCleanedNumber } from '../../../utils/utils';
import './inputs-styles.css';

interface FirstDepositeProps {
  price: string;
  setTypedDeposite: (arg: string) => void;
  typedDeposite: string,
  minPercent: number,
}

export default function FirstDeposite({price, setTypedDeposite, typedDeposite, minPercent}: FirstDepositeProps) {
  const currentPrice = getCleanedNumber(price);
  const currentDeposite = getCleanedNumber(typedDeposite);
  const smallestDeposite = currentPrice * (minPercent / 100);
  const isError = (currentDeposite < smallestDeposite) || (currentDeposite >= currentPrice) || currentPrice === 0;
  const priceToDepositePercent = Math.round((currentDeposite / currentPrice) * 100);
  const smallestPercent = Math.round((smallestDeposite / currentPrice) * 100);

  return (
    <div className="input-wrapper">
      <label className="price-label" htmlFor="input-deposit">
        {`Первоначальный взнос ${
          isError
            ? `не может быть < ${Math.round(smallestDeposite).toLocaleString()} или >= ${Math.round(currentPrice).toLocaleString()}`
            : ''
        }`}
      </label>
      <input
        type="text"
        id="input-deposit"
        className="price-deposite"
        value={typedDeposite}
        tabIndex={0}
        aria-labelledby="Поле ввода первоначального взноса"
        onFocus={() => setTypedDeposite('')}
        onBlur={() =>
          isError
            ? setTypedDeposite(`${Math.round(smallestDeposite).toLocaleString()} рублей`)
            : setTypedDeposite(`${(Math.round(+typedDeposite)).toLocaleString()} рублей`)}
        onChange={({ target }) => {
          if (/^\d+$/gi.test(target.value)) {
            setTypedDeposite(target.value);
          }
        }}
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
            onChange={({ target }) => {
              setTypedDeposite(
                `${Math.round((currentPrice * (+target.value / 100))).toLocaleString()} рублей`,
              );
            }}
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
