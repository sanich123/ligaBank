import { useState } from 'react';
import { advantagesTypes } from '../../../utils/const';
import AdvantagesControls from '../advantages-controls/advantages-controls';
import AdvantagesSlider from '../advantages-slider/advantages-slider';
import './advantages-styles.css';

export default function Advantages() {
  const [activeBtn, setActiveBtn] = useState(advantagesTypes.deposites);

  return (
    <section className="advantages container">
      <h2 className="visually-hidden">Наши преимущества</h2>
      <div className="advantages__controls">
        <AdvantagesControls activeBtn={activeBtn} setActiveBtn={setActiveBtn}/>
      </div>
      <AdvantagesSlider activeBtn={activeBtn}/>
    </section>
  );
}
