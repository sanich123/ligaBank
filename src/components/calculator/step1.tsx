export default function Step1() {
  return (
    <>
      <h3>Шаг 1. Цель кредита</h3>
      <select className="main-calculator__select">
        <option
          className="main-calculator__select--option"
          value="Выберите цель кредита"
        >
        Выберите цель кредита
        </option>
        <option value="Ипотечное кредитование">
        Ипотечное кредитование
        </option>
        <option value="Автомобильное кредитование">
        Автомобильное кредитование
        </option>
      </select>
    </>
  );
}
