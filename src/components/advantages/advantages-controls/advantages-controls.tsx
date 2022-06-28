import { advantagesBtns } from '../../../utils/const';
import './advantages-controls-styles.css';

interface AdvantagesContolsProps {
  activeBtn: string,
  setActiveBtn: (arg: string) => void,
}

export default function AdvantagesControls({activeBtn, setActiveBtn}: AdvantagesContolsProps) {

  return (
    <>
      {Object.entries(advantagesBtns).map(([description, icon]) => (
        <button
          key={description}
          className={`advantages__controls--btn ${
            activeBtn === description
              ? 'advantages__controls--btn-active'
              : ''
          }`}
          type="button"
          onClick={() => setActiveBtn(description)}
          aria-label="Кнопка показывающая преимущества нашего банка"
        >
          {icon}
          {description}
        </button>
      ))}
    </>);
}
