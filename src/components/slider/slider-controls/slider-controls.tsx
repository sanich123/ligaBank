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
        <button
          key={tab}
          type="button"
          className={activeSlide === index ? 'active' : ''}
          onClick={() => setActiveSlide(index)}
          aria-label={tab}
        />))}
    </div>
  );
}
