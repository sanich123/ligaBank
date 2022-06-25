import { useState } from 'react';
import { advantagesInsurances, advantagesCredits, advantagesDeposites, advantagesOnline, advantagesTypes, advantagesBtns } from '../../utils/const';
import { AcceptIcon } from '../icons';
import './advantages-styles.css';
import LearnMoreRef from './learn-more-ref';

export default function Advantages() {
  const [activeBtn, setActiveBtn] = useState(advantagesTypes.deposites);

  return (
    <section className="advantages container">
      <h2 className="visually-hidden">Наши преимущества</h2>
      <div className="advantages__controls">
        {Object.entries(advantagesBtns).map(([description, icon]) => (
          <button
            key={description}
            className={`advantages__controls--btn ${
              activeBtn === description
                ? 'advantages__controls--btn-active'
                : ''
            }`}
            type="button"
            onClick={() => setActiveBtn(description)}
            aria-label="Кнопка показывающая преимущества нашего банка"
          >
            {icon}
            {description}
          </button>
        ))}
      </div>
      <ul className="advantages__slider">
        {activeBtn === advantagesTypes.deposites && (
          <li className="advantages__slider--item">
            <div className="advantage__slider--item-wrapper">
              <h3>
                Вклады Лига Банка – это выгодная <br />
                инвестиция в свое будущее
              </h3>
              <ul className="advantages__list">
                {advantagesDeposites.map((advantage) => (
                  <li key={advantage}>
                    <span className="accept-icon">
                      <AcceptIcon />
                    </span>
                    {advantage}
                  </li>
                ))}
              </ul>
              <LearnMoreRef />
            </div>
            <img
              alt="Промо картинка свинья с копилкой"
              src="./img/content/piggybank.png"
            />
          </li>
        )}
        {activeBtn === advantagesTypes.credits && (
          <li className="advantages__slider--item">
            <div className="advantage__slider--item-wrapper">
              <h3>Лига Банк выдает кредиты под любые цели</h3>
              <ul className="advantages__list">
                {advantagesCredits.map((credit) => (
                  <li key={credit}>
                    <AcceptIcon />
                    {credit}
                  </li>
                ))}
              </ul>
              <p>
                Рассчитайте ежемесячный платеж и ставку по кредиту
                воспользовавшись нашим{' '}
                <a href="#calculator">кредитным калькулятором</a>
              </p>
            </div>
            <img
              alt="Промо картинка кредит на машину"
              src="./img/content/car-credit.png"
            />
          </li>
        )}
        {activeBtn === advantagesTypes.insurance && (
          <li className="advantages__slider--item">
            <div className="advantage__slider--item-wrapper">
              <h3>Лига Страхование — застрахуем все что захотите</h3>
              <ul className="advantages__list">
                {advantagesInsurances.map((insurance) => (
                  <li key={insurance}>
                    <AcceptIcon />
                    {insurance}
                  </li>
                ))}
              </ul>
              <LearnMoreRef />
            </div>
            <img
              alt="Промо картинка замок с сердечком"
              src="./img/content/secure-lock.png"
            />
          </li>
        )}
        {activeBtn === advantagesTypes.online && (
          <li className="advantages__slider--item">
            <div className="advantage__slider--item-wrapper">
              <h3>
                Лига Банк — это огромное количество онлайн-сервисов для вашего
                удобства
              </h3>
              <ul className="advantages__list">
                {advantagesOnline.map((online) => (
                  <li key={online}>
                    <AcceptIcon />
                    {online}
                  </li>
                ))}
              </ul>
              <LearnMoreRef />
            </div>
            <img
              alt="Промо картинка замок с сердечком"
              src="./img/content/mobile.png"
            />
          </li>
        )}
      </ul>
    </section>
  );
}
