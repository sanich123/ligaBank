import { MIN_CARCREDIT_PRICE, MIN_MORTGAGE_PRICE, purposesOfCredit } from '../../../utils/const';

interface Step1Props {
  setGoal: (arg: string) => void,
  setPrice: (arg: string) => void,
}

export default function Step1({setGoal, setPrice}: Step1Props) {

  return (
    <>
      <h3>Шаг 1. Цель кредита</h3>
      <select
        className="main-calculator__select"
        onChange={({ target }) => {
          setGoal(target.value);
          if (target.value) {
            target.value === purposesOfCredit.mortgage
              ? setPrice(`${MIN_MORTGAGE_PRICE.toLocaleString()} рублей`)
              : setPrice(`${MIN_CARCREDIT_PRICE.toLocaleString()} рублей`);
          }
        }}
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
