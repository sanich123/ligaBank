import { sliderTabs } from '../../../utils/const';
import './slider-controls-styles.css';

export default function SliderControls({activeSlide}: {activeSlide: number}) {

  return (
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
  );
}
