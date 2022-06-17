import { FocusOn } from 'react-focus-on';
import { purposesOfCredit } from '../../utils/const';
import { CloseIcon } from '../svg';

interface ModalSuccessProps {
  setIsSuccessMessage: (arg: boolean) => void,
  setGoal: (arg: string) => void,
  setPrice: (arg: string) => void,
  setIsFormOpen: (arg: boolean) => void,
}
export default function ModalSuccess({ setIsSuccessMessage, setGoal, setPrice, setIsFormOpen}: ModalSuccessProps) {

  return (
    <div className="modal is-active">
      <div className="modal__wrapper">
        <FocusOn
          onEscapeKey={() => {
            setIsSuccessMessage(false);
            setGoal(purposesOfCredit.notSelected);
            setPrice('');
            setIsFormOpen(false);
          }}
          onClickOutside={() => {
            setIsSuccessMessage(false);
            setGoal(purposesOfCredit.notSelected);
            setPrice('');
            setIsFormOpen(false);
          }}
        >
          <div className="modal__content proposal-wrong">
            <h3>Спасибо за обращение в наш банк.</h3>
            <p>
              Наш менеджер скоро свяжется с вами по указанному номеру телефона.
            </p>
            <button
              className="modal__close--btn"
              type="button"
              aria-label="Закрыть"
              tabIndex={0}
              onClick={() => {
                setIsSuccessMessage(false);
                setGoal(purposesOfCredit.notSelected);
                setPrice('');
                setIsFormOpen(false);
              }}
            >
              <CloseIcon />
            </button>
          </div>
        </FocusOn>
      </div>
    </div>
  );
}
