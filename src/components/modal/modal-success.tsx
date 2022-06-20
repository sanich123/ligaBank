import { FocusOn } from 'react-focus-on';
import { purposesOfCredit } from '../../utils/const';
import { CloseIcon } from '../svgs';

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
              tabIndex={0}
              onClick={resetToDefault}
            >
              <CloseIcon />
            </button>
            <h3>Спасибо за обращение в наш банк.</h3>
            <p>
              Наш менеджер скоро свяжется с вами по указанному номеру телефона.
            </p>
          </div>
        </FocusOn>
      </div>
    </div>
  );
}
