import { useState } from 'react';
import { purposesOfCredit } from '../../../utils/const';
import Step1 from './step1';
import Step2 from './step2';

export default function Calculator() {
  const [goal, setGoal] = useState('');
  const [price, setPrice] = useState('');
  const [isMotherCapital, setIsMotherCapital] = useState(false);
  const [isNeedInsurance, setIsNeedInsurance] = useState(false);
  const [isNeedKasko, setIsNeedKasko] = useState(false);

  return (
    <>
      <div className="grid-layout">
        <div className="step1-step2">
          <Step1 setGoal={setGoal} setPrice={setPrice}/>
          {
            (goal === purposesOfCredit.carCredit ||
            goal === purposesOfCredit.mortgage) &&
            (
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
              />
            )
          }
        </div>
        {goal && goal !== purposesOfCredit.notSelected && (
          <div className="proposal">
            <h3>Наше предложение</h3>
            <ul className="proposal-list">
              <li className="proposal-list__item">
                <h3>1 330 000 рублей</h3>
                <span>Сумма ипотеки</span>
              </li>
              <li className="proposal-list__item">
                <h3>9,40%</h3>
                <span>Процентная ставка</span>
              </li>
              <li className="proposal-list__item">
                <h3>27 868 рублей</h3>
                <span>Ежемесячный платеж</span>
              </li>
              <li className="proposal-list__item">
                <h3>61 929 рублей</h3>
                <span>Необходимый доход</span>
              </li>
            </ul>
            <button type="button" className="btn long-btn">
              Оформить заявку
            </button>
          </div>
        )}
      </div>
      <div className="step3" style={{display: 'none'}}>
        <h3>Шаг 3. Оформление заявки</h3>
        <ul className="step3-description__list">
          <li className="step3-description__item">
            <strong>Номер заявки</strong>
            <span>№ 0010</span>
          </li>
          <li className="step3-description__item">
            <strong>Цель кредита</strong>
            <span>Ипотека</span>
          </li>
          <li className="step3-description__item">
            <strong>Стоимость недвижимости</strong>
            <span>2 000 000 рублей</span>
          </li>
          <li className="step3-description__item">
            <strong>Первоначальный взнос</strong>
            <span>200 000 рублей</span>
          </li>
          <li className="step3-description__item">
            <strong>Срок кредитования</strong>
            <span>5 лет</span>
          </li>
        </ul>
        <form className="submit-form">
          <input
            className="submit-form__surname"
            id="input-surname"
            type="text"
            placeholder="ФИО"
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
    </>
  );
}
