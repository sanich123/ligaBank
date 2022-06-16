import { useState } from 'react';
import { getCleanedNumber } from '../../../utils/utils';

interface FirstDepositeProps {
  price: string;
  goal: string;
  setTypedDeposite: (arg: string) => void;
  typedDeposite: string,
}

export default function FirstDeposite({price, goal, setTypedDeposite, typedDeposite}: FirstDepositeProps) {
  const [rangeNumber, setRangeNumber] = useState(10);

  return (
    <div className="input-wrapper">
      <label className="price-label" htmlFor="input-deposit">
        Первоначальный взнос
      </label>
      <br />
      <input
        type="text"
        id="input-deposit"
        className="price-deposite"
        value={(getCleanedNumber(typedDeposite) * rangeNumber) / 10}
        tabIndex={0}
        onFocus={() => {
          setTypedDeposite('');
          setRangeNumber(10);
        }}
        onBlur={() => {
          if (getCleanedNumber(typedDeposite) > getCleanedNumber(price) / 10) {
            setTypedDeposite(
              `${Number(typedDeposite).toLocaleString()} рублей`,
            );
          } else {
            setTypedDeposite(
              `${(getCleanedNumber(price) / 10).toLocaleString()} рублей`,
            );
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
        min="10"
        max="100"
        step="5"
        value={
          (getCleanedNumber(typedDeposite) / getCleanedNumber(price)) *
          10 *
          rangeNumber
        }
        onChange={({ target }) => setRangeNumber(+target.value)}
      />
      <br />
      <span className="sub-input">{rangeNumber}%</span>
    </div>
  );
}
