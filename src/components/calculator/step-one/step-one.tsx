import { useState } from 'react';
import { localRus, MIN_CARCREDIT_PRICE, MIN_CARCREDIT_TIME, MIN_MORTGAGE_PRICE, MIN_MORTGAGE_TIME, purposesOfCredit } from '../../../utils/const';
import { getFormattedValue } from '../../../utils/utils';
import './step-one-styles.css';

interface StepOneProps {
  setGoal: (arg: string) => void,
  setPrice: (arg: string) => void,
  setDeposite: (arg: string) => void,
  setRangeOfTime: (arg: string) => void,
  goal: string,
}

export default function StepOne({setGoal, setPrice, setDeposite, setRangeOfTime, goal}: StepOneProps) {
  const [isClick, setIsClick] = useState(false);

  const initialCarCredit = () => {
    setGoal(purposesOfCredit.carCredit);
    setPrice(`${MIN_CARCREDIT_PRICE.toLocaleString(localRus)} рублей`);
    setDeposite(
      `${(MIN_CARCREDIT_PRICE * 0.2).toLocaleString(localRus)} рублей`,
    );
    setRangeOfTime(getFormattedValue(`${MIN_CARCREDIT_TIME}`));
    setIsClick(!isClick);
  };

  const initialMortgage = () => {
    setGoal(purposesOfCredit.mortgage);
    setPrice(`${MIN_MORTGAGE_PRICE.toLocaleString(localRus)} рублей`);
    setDeposite(`${(MIN_MORTGAGE_PRICE * 0.1).toLocaleString(localRus)} рублей`);
    setRangeOfTime(getFormattedValue(`${MIN_MORTGAGE_TIME}`));
    setIsClick(!isClick);
  };

  return (
    <>
      <h3>Шаг 1. Цель кредита</h3>
      <form>
        <div
          className={`select ${isClick ? 'isActive' : ''}`}
          data-state={isClick ? 'active' : ''}
        >
          <div
            tabIndex={0}
            aria-label="Выпадающий список: автокредит или ипотека"
            className="select__title"
            onKeyDown={({code}) => code === 'Tab' ? setIsClick(!isClick) : ''}
            onClick={() => setIsClick(!isClick)}
          >
            {goal}
          </div>
          <div
            className="select__content"
            style={{ borderTop: `${isClick ? '1px solid #1F1E25' : ''}` }}
          >
            <input
              id="mortgage"
              className="select__input"
              type="radio"
              area-labelledby={purposesOfCredit.mortgage}
            />
            <label
              htmlFor="mortgage"
              className="select__label"
              tabIndex={0}
              onKeyDown={({ code }) =>
                code === 'Enter' ? initialMortgage() : ''}
              onClick={initialMortgage}
            >
              {purposesOfCredit.mortgage}
            </label>
            <input
              id="car-credit"
              className="select__input"
              type="radio"
              aria-labelledby={purposesOfCredit.carCredit}
            />
            <label
              htmlFor="car-credit"
              className="select__label"
              tabIndex={0}
              onKeyDown={({ code }) =>
                code === 'Enter' ? initialCarCredit() : ''}
              onClick={initialCarCredit}
            >
              {purposesOfCredit.carCredit}
            </label>
          </div>
        </div>
      </form>
    </>
  );
}
