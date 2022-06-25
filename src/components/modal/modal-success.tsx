import { FocusOn } from 'react-focus-on';
import { purposesOfCredit } from '../../utils/const';
import { CloseIcon } from '../icons';
import './modal-success-styles.css';

interface ModalSuccessProps {
  setIsSuccessMessage: (arg: boolean) => void,
  setGoal: (arg: string) => void,
  setPrice: (arg: string) => void,
  setIsFormOpen: (arg: boolean) => void,
}

export default function ModalSuccess({ setIsSuccessMessage, setGoal, setPrice, setIsFormOpen}: ModalSuccessProps) {

  const resetToDefault = () => {
    setIsSuccessMessage(false);
    setGoal(purposesOfCredit.notSelected);
    setPrice('');
    setIsFormOpen(false);
  };

  return (
    <div className="modal is-active">
      <div className="modal__wrapper">
        <FocusOn onEscapeKey={resetToDefault} onClickOutside={resetToDefault}>
          <div className="modal__success">
            <button
              className="modal__success--close-btn"
              type="button"
              aria-label="Закрыть"
              onClick={resetToDefault}
            >
              <CloseIcon />
            </button>
            <h3>Спасибо за обращение в наш банк.</h3>
            <span>Наш менеджер скоро свяжется с вами</span>
            <span>по указанному номеру телефона.</span>
          </div>
        </FocusOn>
      </div>
    </div>
  );
}
