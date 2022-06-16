import { useState } from 'react';
import {  purposesOfCredit } from '../../../utils/const';
import { totalCredit } from '../../../utils/utils';

import Step1 from './step1';
import Step2 from './step2';

export default function Calculator() {
  const [goal, setGoal] = useState('');
  const [price, setPrice] = useState('');
  const [typedDeposite, setTypedDeposite] = useState('');
  const [rangeOfTime, setRangeOfTime] = useState('');
  const [isMotherCapital, setIsMotherCapital] = useState(false);
  const [isNeedInsurance, setIsNeedInsurance] = useState(false);
  const [isNeedKasko, setIsNeedKasko] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const {isVisible, totalSum, minSum, typeOfCredit, calculatedPercent, monthPayment, type, type2, type3, currentPrice, currentDeposite, currentRangeOfTime} = totalCredit(isNeedKasko, isNeedInsurance, isMotherCapital, goal, price, typedDeposite, rangeOfTime);

  return (
    <>
      <div className="grid-layout">
        <div className="step1-step2">
          <Step1
            setGoal={setGoal}
            setPrice={setPrice}
            setTypedDeposite={setTypedDeposite}
            setRangeOfTime={setRangeOfTime}
          />
          {(goal === purposesOfCredit.carCredit ||
            goal === purposesOfCredit.mortgage) && (
            <Step2
              goal={goal}
              price={price}
              setPrice={setPrice}
              setIsMotherCapital={setIsMotherCapital}
              isMotherCapital={isMotherCapital}
              setIsNeedInsurance={setIsNeedInsurance}
              setIsNeedKasko={setIsNeedKasko}
              isNeedInsurance={isNeedInsurance}
              isNeedKasko={isNeedKasko}
              typedDeposite={typedDeposite}
              setTypedDeposite={setTypedDeposite}
              setRangeOfTime={setRangeOfTime}
              rangeOfTime={rangeOfTime}
            />
          )}
        </div>
        {goal && goal !== purposesOfCredit.notSelected && (
          <div className="proposal">
            {isVisible && (
              <div className="proposal-wrong">
                <h3>
                  Наш банк не выдаёт {typeOfCredit} меньше {minSum} рублей.
                </h3>
                <p>Попробуйте использовать другие параметры для расчёта.</p>
              </div>
            )}
            {!isVisible && (
              <>
                <h3>Наше предложение</h3>
                <ul className="proposal-list">
                  <li className="proposal-list__item">
                    <h3>{totalSum.toLocaleString()} рублей</h3>
                    <span>
                      Сумма {type3}
                    </span>
                  </li>
                  <li className="proposal-list__item">
                    <h3>{calculatedPercent}%</h3>
                    <span>Процентная ставка</span>
                  </li>
                  <li className="proposal-list__item">
                    <h3>{monthPayment.toLocaleString()} рублей</h3>
                    <span>Ежемесячный платеж</span>
                  </li>
                  <li className="proposal-list__item">
                    <h3>{(monthPayment * 2.1).toLocaleString()} рублей</h3>
                    <span>Необходимый доход</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn long-btn"
                  onClick={() => setIsFormOpen(true)}
                >
                  Оформить заявку
                </button>
              </>
            )}
          </div>
        )}
      </div>
      {isFormOpen && (
        <div className="step3">
          <h3>Шаг 3. Оформление заявки</h3>
          <ul className="step3-description__list">
            <li className="step3-description__item">
              <strong>Номер заявки</strong>
              <span>№ 0010</span>
            </li>
            <li className="step3-description__item">
              <strong>Цель кредита</strong>
              <span>{type}</span>
            </li>
            <li className="step3-description__item">
              <strong>Стоимость {type2}</strong>
              <span>{currentPrice.toLocaleString()} рублей</span>
            </li>
            <li className="step3-description__item">
              <strong>Первоначальный взнос</strong>
              <span>{currentDeposite.toLocaleString()} рублей</span>
            </li>
            <li className="step3-description__item">
              <strong>Срок кредитования</strong>
              <span>{currentRangeOfTime} лет</span>
            </li>
          </ul>
          <form className="submit-form">
            <input
              className="submit-form__surname"
              id="input-surname"
              type="text"
              placeholder="ФИО"
              autoFocus
            />
            <input
              className="submit-form__phone"
              id="input-phone"
              type="tel"
              placeholder="Телефон"
            />
            <input
              className="submit-form__mail"
              id="input-mail"
              type="mail"
              placeholder="E-mail"
            />
            <button className="submit-form__btn btn" type="submit">
              Отправить
            </button>
          </form>
        </div>
      )}
    </>
  );
}
