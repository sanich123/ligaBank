import { useEffect, useRef, useState } from 'react';
import { FIRST_SLIDE, LAST_SLIDE, SECOND_SLIDE, slidersNumbers, sliderTabs } from '../../utils/const';
import './slider-styles.css';

export default function Slider() {
  const DELAY = 4000;
  const [activeSlide, setActiveSlide] = useState(FIRST_SLIDE);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => setActiveSlide(activeSlide === LAST_SLIDE ? FIRST_SLIDE : activeSlide + 1), DELAY);
    return () => {
      resetTimeout();
    };
  }, [activeSlide, setActiveSlide]);

  return (
    <div
      className={`wrapper-slider wrapper-slider__${slidersNumbers[activeSlide]}-slide`}
    >
      <section className="slider container">
        <div className="slider__controls">
          {sliderTabs.map((tab, index) => (
            <button
              key={tab}
              type="button"
              className={activeSlide === index ? 'active' : ''}
              disabled
              aria-label={tab}
            />))}
        </div>
        <ul className="slider__list">
          {activeSlide === FIRST_SLIDE && (
            <li className="slider__list--first-slide">
              <div className="slider__list--first-gradient"/>
              <div className="slider__list--second-gradient"/>
              <h2>Лига Банк</h2>
              <p>Кредиты на любой случай</p>
              <a href="#calculator">Рассчитать кредит</a>
            </li>)}
          {activeSlide === SECOND_SLIDE && (
            <li className="slider__list--second-slide">
              <h2>Лига Банк</h2>
              <p>Ваша уверенность в завтрашнем дне</p>
            </li>)}
          {activeSlide === LAST_SLIDE && (
            <li className="slider__list--third-slide">
              <h2>Лига Банк</h2>
              <p>Всегда рядом</p>
              <a href="#offices">Найти отделение</a>
            </li>)}
        </ul>
      </section>
    </div>
  );
}
