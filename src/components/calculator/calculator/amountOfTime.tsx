import { useState } from 'react';
import { getFormattedValue } from '../../../utils/utils';

export default function AmountOfTime() {
  const [rangeOfTime, setRangeOfTime] = useState('5');

  return (
    <div className="input-wrapper">
      <label className="price-label" htmlFor="input-time">
        Срок кредитования
      </label>
      <br />
      <input
        className="input-time"
        type="text"
        id="input-time"
        value={getFormattedValue(rangeOfTime)}
        onChange={({ target }) => {
          if (!/\D/gi.test(target.value)) {
            setRangeOfTime(target.value);
          }
        }}
        onFocus={() => setRangeOfTime('')}
        onBlur={() =>
          +rangeOfTime < 5 || +rangeOfTime > 30
            ? setRangeOfTime('5')
            : setRangeOfTime(rangeOfTime)}
      />
      <br />
      <input
        type="range"
        className="input-range"
        min="5"
        max="30"
        step="1"
        value={rangeOfTime}
        onChange={({ target }) => setRangeOfTime(target.value)}
      />
      <br />
      <span className="sub-input">5 лет</span>
      <span className="sub-input">30 лет</span>
    </div>
  );
}
