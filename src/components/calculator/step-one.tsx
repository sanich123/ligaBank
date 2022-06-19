import { MIN_CARCREDIT_PRICE, MIN_CARCREDIT_TIME, MIN_MORTGAGE_PRICE, MIN_MORTGAGE_TIME, purposesOfCredit } from '../../utils/const';
import { getFormattedValue } from '../../utils/utils';

interface Step1Props {
  setGoal: (arg: string) => void,
  setPrice: (arg: string) => void,
  setTypedDeposite: (arg: string) => void,
  setRangeOfTime: (arg: string) => void,
}

export default function StepOne({setGoal, setPrice, setTypedDeposite, setRangeOfTime}: Step1Props) {

  return (
    <>
      <h3>Шаг 1. Цель кредита</h3>
      <select
        className="main-calculator__select"
        onChange={({ target }) => {
          setGoal(target.value);
          if (target.value) {
            if (target.value === purposesOfCredit.mortgage) {
              setPrice(`${MIN_MORTGAGE_PRICE.toLocaleString()} рублей`);
              setTypedDeposite(
                `${(MIN_MORTGAGE_PRICE * 0.1).toLocaleString()} рублей`,
              );
              setRangeOfTime(getFormattedValue(`${MIN_MORTGAGE_TIME}`));
            }
            if (target.value === purposesOfCredit.carCredit) {
              setPrice(`${MIN_CARCREDIT_PRICE.toLocaleString()} рублей`);
              setTypedDeposite(
                `${(MIN_CARCREDIT_PRICE * 0.2).toLocaleString()} рублей`,
              );
              setRangeOfTime(getFormattedValue(`${MIN_CARCREDIT_TIME}`));
            }
          }
        }}
      >
        {Object.values(purposesOfCredit).map((purpose) => (
          <option
            key={purpose}
            className="main-calculator__select--option"
            value={purpose}
          >
            {purpose}
          </option>
        ))}
      </select>
    </>
  );
}
