import { getCleanedTime, getFormattedValue } from '../../../../utils/utils';
import '../inputs-styles.css';
import '../first-deposite/range-styles.css';

interface AmountOfTimeProps {
  rangeOfTime: string,
  setRangeOfTime: (arg: string) => void,
  minTime: number,
  maxTime: number,
}

export default function AmountOfTime({rangeOfTime, setRangeOfTime, minTime, maxTime}: AmountOfTimeProps) {
  const currentTime = getCleanedTime(rangeOfTime);
  const isError = currentTime < minTime || currentTime > maxTime;
  const formattedMinValue = getFormattedValue(minTime.toString());
  const formattedMaxValue = getFormattedValue(maxTime.toString());
  const labelMessage = `Срок кредитования ${isError ? `должен быть в промежутке от ${formattedMinValue} до ${formattedMaxValue}` : ''}`;

  return (
    <div className="input-wrapper">
      <label className="price-label time-label" htmlFor="input-time">
        {labelMessage}
      </label>
      <input
        className="input-time"
        type="text"
        id="input-time"
        aria-labelledby="Поле ручного ввода срока кредита"
        value={rangeOfTime}
        onChange={({ target }) => {
          if (/^\d+$/gi.test(target.value)) {
            setRangeOfTime(target.value);
          }
        }}
        onFocus={() => setRangeOfTime('')}
        onBlur={({ target }) =>
          isError
            ? setRangeOfTime(formattedMinValue)
            : setRangeOfTime(getFormattedValue(target.value))}
      />
      <input
        type="range"
        className="input-range last-range"
        aria-labelledby="Поле ввода срока кредита с помощью range"
        min={minTime}
        max={maxTime}
        step="1"
        value={isError ? minTime : currentTime}
        onChange={({ target }) => setRangeOfTime(getFormattedValue(target.value))}
      />
      <div className="wrapper-for-sub">
        <span className="sub-range">{formattedMinValue}</span>
        <span className="sub-range">{formattedMaxValue}</span>
      </div>
    </div>
  );
}
