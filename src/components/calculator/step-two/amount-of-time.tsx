import { getCleanedTime, getFormattedValue } from '../../../utils/utils';

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

  return (
    <div className="input-wrapper">
      <label className="price-label" htmlFor="input-time">
        {`Срок кредитования ${isError ? `должен быть в промежутке от ${formattedMinValue} до ${formattedMaxValue}` : ''}`}
      </label>
      <br />
      <input
        className="input-time"
        type="text"
        id="input-time"
        value={rangeOfTime}
        onChange={({ target }) => {
          if (/\d/gi.test(target.value)) {
            setRangeOfTime(target.value);
          }
        }}
        onFocus={() => setRangeOfTime('')}
        onBlur={({target}) => isError ? setRangeOfTime(formattedMinValue) : setRangeOfTime(getFormattedValue(target.value))}
      />
      <br />
      <input
        type="range"
        className="input-range"
        min={minTime}
        max={maxTime}
        step="1"
        value={isError ? minTime : currentTime}
        onChange={({ target }) => setRangeOfTime(getFormattedValue(target.value))}
      />
      <br />
      <div className="wrapper-for-sub">
        <span className="sub-input">{formattedMinValue}</span>
        <span className="sub-input">{formattedMaxValue}</span>
      </div>
    </div>
  );
}
