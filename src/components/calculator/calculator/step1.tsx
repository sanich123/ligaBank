import { MIN_CARCREDIT_PRICE, MIN_MORTGAGE_PRICE, purposesOfCredit } from '../../../utils/const';

interface Step1Props {
  setGoal: (arg: string) => void,
  setPrice: (arg: string) => void,
  setTypedDeposite: (arg: string) => void,
  setRangeOfTime: (arg: string) => void,
}

export default function Step1({setGoal, setPrice, setTypedDeposite, setRangeOfTime}: Step1Props) {

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

              setTypedDeposite(`${(MIN_MORTGAGE_PRICE * 0.1).toLocaleString()} рублей`);
              setRangeOfTime('5');
            }
            if (target.value === purposesOfCredit.carCredit) {
              setPrice(`${MIN_CARCREDIT_PRICE.toLocaleString()} рублей`);
              setTypedDeposite(`${(MIN_CARCREDIT_PRICE * 0.2).toLocaleString()} рублей`);
              setRangeOfTime('1');
            }}}}
      >
        <option
          className="main-calculator__select--option"
          value="Выберите цель кредита"
        >
          Выберите цель кредита
        </option>
        <option value={purposesOfCredit.mortgage}>
          {purposesOfCredit.mortgage}
        </option>
        <option value={purposesOfCredit.carCredit}>
          {purposesOfCredit.carCredit}
        </option>
      </select>
    </>
  );
}
