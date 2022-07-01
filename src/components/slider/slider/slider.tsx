import { useEffect, useState } from 'react';
import { FIRST_SLIDE, LAST_SLIDE, slidersNumbers, SLIDER_DELAY } from '../../../utils/const';
import FirstSlideGradients from '../first-slide-gradients/first-slide-gradients';
import SliderControls from '../slider-controls/slider-controls';
import SliderList from '../slider-list/slider-list';
import './slider-styles.css';

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(FIRST_SLIDE);
  const currentSlide = slidersNumbers[activeSlide];

  useEffect(() => {
    const timeout = setTimeout(
      () => setActiveSlide((prevSlide) => prevSlide === LAST_SLIDE ? FIRST_SLIDE : prevSlide + 1),
      SLIDER_DELAY);
    return () => clearTimeout(timeout);
  }, [activeSlide]);

  return (
    <div className={`wrapper-slider wrapper-slider__${currentSlide}-gradient`}>
      <div className={`wrapper-slider__${currentSlide}-img`}>
        {activeSlide === FIRST_SLIDE && <FirstSlideGradients />}

        <section className="slider container">
          <SliderControls activeSlide={activeSlide} setActiveSlide={setActiveSlide}/>
          <SliderList activeSlide={activeSlide} />
        </section>
      </div>
    </div>
  );
}
