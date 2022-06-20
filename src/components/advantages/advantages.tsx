import { useState } from 'react';
import { advantageInsurances, advantagesBtns, advantagesCredits, advantagesDeposites, advantagesOnline, advantagesTypes } from '../../utils/const';
import { AcceptIcon } from '../svgs';

export default function Advantages() {
  const [activeBtn, setActiveBtn] = useState(advantagesTypes.deposites);

  return (
    <section className="main-advantages container">
      <h2 className="visually-hidden">Наши преимущества</h2>
      <div className="main-advantages__controls">
        {Object.entries(advantagesBtns).map(([key, icon]) => (
          <button
            key={key}
            className={`main-advantages__btn ${
              activeBtn === key ? 'main-advantages__btn--active' : ''
            }`}
            type="button"
            onClick={() => setActiveBtn(key)}
            tabIndex={0}
          >
            {icon}
            {key}
          </button>
        ))}
      </div>
      <ul className="main-advantages__list">
        {activeBtn === advantagesTypes.deposites && (
          <li className="main-advantages__list--item">
            <div>
              <h3>
                Вклады Лига Банка – это выгодная инвестиция в свое будущее
              </h3>
              <ul className="advantages">
                {advantagesDeposites.map((advantage) => (
                  <li key={advantage}><AcceptIcon/>{advantage}</li>
                ))}
              </ul>
              <button className="btn" type="button">
                Узнать подробнее
              </button>
            </div>
            <img
              alt="Промо картинка свинья с копилкой"
              src="./img/content/piggybank.png"
            />
          </li>
        )}
        {activeBtn === advantagesTypes.credits && (
          <li className="main-advantages__list--item">
            <div>
              <h3>Лига Банк выдает кредиты под любые цели</h3>
              <ul className="advantages">
                {advantagesCredits.map((credit) => (
                  <li key={credit}><AcceptIcon/>{credit}</li>
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
          <li className="main-advantages__list--item">
            <div>
              <h3>Лига Страхование — застрахуем все что захотите</h3>
              <ul className="advantages">
                {advantageInsurances.map((insurance) => <li key={insurance}><AcceptIcon/>{insurance}</li>)}
              </ul>
              <button className="btn" type="button">
                Узнать подробнее
              </button>
            </div>
            <img
              alt="Промо картинка замок с сердечком"
              src="./img/content/secure-lock.png"
            />
          </li>
        )}
        {activeBtn === advantagesTypes.online && (
          <li className="main-advantages__list--item">
            <div>
              <h3>
                Лига Банк — это огромное количество онлайн-сервисов для вашего
                удобства
              </h3>
              <ul>
                {advantagesOnline.map((online) => <li key={online}><AcceptIcon/>{online}</li>)}
              </ul>
              <button className="btn" type="button">
                Узнать подробнее
              </button>
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
