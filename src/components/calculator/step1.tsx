import { purposesOfCredit } from '../../utils/const';

interface Step1Props {
  setGoal: (arg: string) => void,
}

export default function Step1({setGoal}: Step1Props) {

  return (
    <>
      <h3>Шаг 1. Цель кредита</h3>
      <select
        className="main-calculator__select"
        onChange={({ target }) => setGoal(target.value)}
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
