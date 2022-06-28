import { useEffect, useRef, useState } from 'react';
import { FIRST_SLIDE, LAST_SLIDE, SECOND_SLIDE, slidersNumbers, SLIDER_DELAY } from '../../../utils/const';
import FirstSlideGradients from '../first-slide-gradients/first-slide-gradients';
import SliderControls from '../slider-controls/slider-controls';
import SliderList from '../slider-list/slider-list';
import './slider-styles.css';

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(SECOND_SLIDE);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentSlide = slidersNumbers[activeSlide];

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => setActiveSlide(activeSlide === LAST_SLIDE ? FIRST_SLIDE : activeSlide + 1), SLIDER_DELAY);
    return () => {
      resetTimeout();
    };
  }, [activeSlide, setActiveSlide]);

  return (
    <div className={`wrapper-slider wrapper-slider__${currentSlide}-gradient`}>
      <div className={`wrapper-slider__${currentSlide}-img`}>
        {activeSlide === FIRST_SLIDE && <FirstSlideGradients />}

        <section className="slider container">
          <SliderControls activeSlide={activeSlide} />
          <SliderList activeSlide={activeSlide} />
        </section>
      </div>
    </div>
  );
}