import { useState } from 'react';
import { advantageInsurances, advantagesBtns, advantagesCredits, advantagesDeposites, advantagesOnline, advantagesTypes } from '../../utils/const';
import { AcceptIcon } from '../svgs';
import './advantages-styles.css';

export default function Advantages() {
  const [activeBtn, setActiveBtn] = useState(advantagesTypes.deposites);

  return (
    <section className="advantages container">
      <h2 className="visually-hidden">Наши преимущества</h2>
      <div className="advantages__controls">
        {Object.entries(advantagesBtns).map(([key, icon]) => (
          <button
            key={key}
            className={`advantages__controls--btn ${
              activeBtn === key ? 'advantages__controls--btn-active' : ''
            }`}
            type="button"
            onClick={() => setActiveBtn(key)}
            tabIndex={0}
            aria-label="Кнопка показывающая преимущества нашего банка"
          >
            {icon}
            {key}
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
              <a
                href="/"
                className="advantages__slider--item-btn"
                aria-labelledby="Узнать подробнее"
                type="button"
              >
                Узнать подробнее
              </a>
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
                воспользовавшись нашим <a href="/">кредитным калькулятором</a>
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
                {advantageInsurances.map((insurance) => (
                  <li key={insurance}>
                    <AcceptIcon />
                    {insurance}
                  </li>
                ))}
              </ul>
              <a
                href="/"
                aria-label="Кнопка узнать подробнее"
                className="advantages__slider--item-btn"
                type="button"
              >
                Узнать подробнее
              </a>
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
              <a
                href="/"
                aria-label="Кнопка узнать подробнее"
                className="advantages__slider--item-btn"
                type="button"
              >
                Узнать подробнее
              </a>
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
