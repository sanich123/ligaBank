import { sliderTabs } from '../../../utils/const';
import './slider-controls-styles.css';

interface SliderControlsProps {
  activeSlide: number,
  setActiveSlide: (arg: number) => void,
}

export default function SliderControls({activeSlide, setActiveSlide}: SliderControlsProps) {

  return (
    <div className="slider__controls">
      {sliderTabs.map((tab, index) => (
        <label
          key={tab}
          className={activeSlide === index ? 'active' : ''}
          aria-label={tab}
          onClick={() => setActiveSlide(index)}
          onKeyDown={({code}) => code === 'Enter' ? setActiveSlide(index) : ''}
          tabIndex={0}
        >
          <input className="visually-hidden" type="checkbox" />
        </label>
      ))}
    </div>
  );
}
