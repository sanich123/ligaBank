import { useEffect, useState } from 'react';
import { sliderTabs } from '../../utils/const';

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [inClick, setIsClick] = useState(false);

  useEffect(() => {
    if (!inClick) {
      const interval = setInterval(() => {
        setActiveSlide((current) => current === 2 ? 0 : current + 1);
      }, 4000);
      return () => clearInterval(interval);
    }
    if (inClick) {
      const timeout = setTimeout(() => {
        setIsClick(false);
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [inClick]);

  return (
    <div className="wrapper-slider">
      <section className="main-slider container">
        <div className="slider-controls">
          {sliderTabs.map((tab, index) => (
            <button
              key={tab}
              type="button"
              className={activeSlide === index ? 'active' : ''}
              onClick={() => {
                setIsClick(true);
                setActiveSlide(index);
              }}
            >
              <span className="visually-hidden">{tab}</span>
            </button>
          ))}
        </div>
        <ul className="main-slider__list">
          {activeSlide === 0 && (
            <li className="main-slider__list--item first-slide">
              <h2>Лига Банк</h2>
              <p>Кредиты на любой случай</p>
              <button type="button">Рассчитать кредит</button>
            </li>
          )}
          {activeSlide === 1 && (
            <li className="main-slider__list--item second-slide">
              <h2>Лига Банк</h2>
              <p>Ваша уверенность в завтрашнем дне</p>
            </li>
          )}
          {activeSlide === 2 && (
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
