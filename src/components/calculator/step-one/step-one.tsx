/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { MIN_CARCREDIT_PRICE, MIN_CARCREDIT_TIME, MIN_MORTGAGE_PRICE, MIN_MORTGAGE_TIME, purposesOfCredit } from '../../../utils/const';
import { getFormattedValue } from '../../../utils/utils';

interface StepOneProps {
  setGoal: (arg: string) => void,
  setPrice: (arg: string) => void,
  setTypedDeposite: (arg: string) => void,
  setRangeOfTime: (arg: string) => void,
  goal: string,
}

export default function StepOne({setGoal, setPrice, setTypedDeposite, setRangeOfTime, goal}: StepOneProps) {
  const [isClick, setIsClick] = useState(false);

  return (
    <>
      <h3>Шаг 1. Цель кредита</h3>
      <form>
        <div className="select" data-state={isClick ? 'active' : ''}>
          <div className="select__title" onClick={() => setIsClick(!isClick)}>
            {goal}
          </div>
          <div className="select__content">
            <input
              id="car-credit"
              className="select__input"
              type="radio"
            />
            <label
              htmlFor="car-credit"
              className="select__label"
              onClick={() => {
                setGoal(purposesOfCredit.carCredit);
                setPrice(`${MIN_CARCREDIT_PRICE.toLocaleString()} рублей`);
                setTypedDeposite(`${(MIN_CARCREDIT_PRICE * 0.2).toLocaleString()} рублей`);
                setRangeOfTime(getFormattedValue(`${MIN_CARCREDIT_TIME}`));
                setIsClick(!isClick);
              }}
            >
              {purposesOfCredit.carCredit}
            </label>

            <input
              id="mortgage"
              className="select__input"
              type="radio"
            />
            <label
              htmlFor="mortgage"
              className="select__label"
              onClick={() => {
                setGoal(purposesOfCredit.mortgage);
                setPrice(`${MIN_MORTGAGE_PRICE.toLocaleString()} рублей`);
                setTypedDeposite(
                  `${(MIN_MORTGAGE_PRICE * 0.1).toLocaleString()} рублей`,
                );
                setRangeOfTime(getFormattedValue(`${MIN_MORTGAGE_TIME}`));
                setIsClick(!isClick);
              }}
            >
              {purposesOfCredit.mortgage}
            </label>
          </div>
        </div>
      </form>
    </>
  );
}
