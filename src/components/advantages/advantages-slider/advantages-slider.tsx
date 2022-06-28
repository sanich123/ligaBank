import { advantagesCredits, advantagesDeposites, advantagesInsurances, advantagesOnline, advantagesTypes } from '../../../utils/const';
import { AcceptIcon } from '../../icons';
import LearnMoreRef from '../learn-more-ref';
import './advantages-slider-styles.css';

export default function AdvantagesSlider({activeBtn}: {activeBtn: string}) {

  return (
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
            src="./img/piggybank.webp"
            width="440px"
            height="290px"
          />
        </li>)}
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
            src="./img/car-credit.webp"
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
            src="./img/secure-lock.webp"
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
            alt="Изображение мобильного телефона"
            src="./img/mobile.webp"
          />
        </li>
      )}
    </ul>
  );
}
