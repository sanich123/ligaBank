import { FIRST_SLIDE, LAST_SLIDE, SECOND_SLIDE, slidersNumbers } from '../../../utils/const';
import './slider-list-styles.css';

export default function SliderList({activeSlide}: {activeSlide: number}) {
  const currentSlide = slidersNumbers[activeSlide];

  return (
    <ul className="slider__list">
      {activeSlide === FIRST_SLIDE && (
        <li className={`slider__list--${currentSlide}-slide`}>
          <h2>Лига Банк</h2>
          <p>Кредиты на любой случай</p>
          <a href="#calculator">Рассчитать кредит</a>
        </li>
      )}
      {activeSlide === SECOND_SLIDE && (
        <li className={`slider__list--${currentSlide}-slide`}>
          <h2>Лига Банк</h2>
          <p>Ваша уверенность в завтрашнем дне</p>
        </li>
      )}
      {activeSlide === LAST_SLIDE && (
        <li className={`slider__list--${currentSlide}-slide`}>
          <h2>Лига Банк</h2>
          <p>Всегда рядом</p>
          <a href="#offices">Найти отделение</a>
        </li>
      )}
    </ul>);
}
