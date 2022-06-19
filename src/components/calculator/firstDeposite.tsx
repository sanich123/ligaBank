import { getCleanedNumber } from '../../utils/utils';

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
  const isError = (currentDeposite < smallestDeposite) || (currentDeposite >= currentPrice);
  const priceToDepositePercent = Math.floor((currentDeposite / currentPrice) * 100);

  return (
    <div className="input-wrapper">
      <label className="price-label" htmlFor="input-deposit">
        {`Первоначальный взнос ${isError ? `не может быть < ${smallestDeposite.toLocaleString()} или >= ${currentPrice.toLocaleString()}` : ''}`}
      </label>
      <br />
      <input
        type="text"
        id="input-deposit"
        className="price-deposite"
        value={currentDeposite < smallestDeposite ? `${smallestDeposite.toLocaleString()} рублей` : typedDeposite}
        tabIndex={0}
        onFocus={() => setTypedDeposite('')}
        onBlur={({target}) => {
          if (isError) {
            setTypedDeposite(
              `${smallestDeposite.toLocaleString()} рублей`,
            );
          }
          else {
            console.log((+typedDeposite).toLocaleString());
            setTypedDeposite(`${(+typedDeposite).toLocaleString()} рублей`);
          }
        }}
        onChange={({ target }) => {
          if (!/\D/gi.test(target.value)) {
            setTypedDeposite(target.value);
          }
        }}
      />
      <br />
      <input
        type="range"
        className="input-range"
        min={minPercent}
        max="100"
        step="5"
        value={priceToDepositePercent}
        onChange={({ target }) => {
          setTypedDeposite(
            `${(currentPrice * (+target.value / 100)).toLocaleString()} рублей`,
          );
        }}
      />
      <br />
      <span className="sub-input">
        {priceToDepositePercent}%
      </span>
    </div>
  );
}
