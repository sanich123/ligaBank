import { useState } from 'react';
import { sliderTabs } from '../../utils/const';

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(sliderTabs[0]);

  return (
    <div className="wrapper-slider">
      <section className="main-slider container">
        <div className="slider-controls">
          {sliderTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={activeSlide === tab ? 'active' : ''}
              onClick={() => setActiveSlide(tab)}
            >
              <span className="visually-hidden">{tab}</span>
            </button>
          ))}
        </div>
        <ul className="main-slider__list">
          {activeSlide === sliderTabs[0] && (
            <li className="main-slider__list--item first-slide">
              <h2>Лига Банк</h2>
              <p>Кредиты на любой случай</p>
              <button type="button">Рассчитать кредит</button>
            </li>
          )}
          {activeSlide === sliderTabs[1] && (
            <li className="main-slider__list--item second-slide">
              <h2>Лига Банк</h2>
              <p>Ваша уверенность в завтрашнем дне</p>
            </li>
          )}
          {activeSlide === sliderTabs[2] && (
            <li className="main-slider__list--item third-slide">
              <h2>Лига Банк</h2>
              <p>Всегда рядом</p>
              <button type="button" className="btn">
                Найти отделение
              </button>
            </li>
          )}
        </ul>
      </section>
    </div>
  );
}
