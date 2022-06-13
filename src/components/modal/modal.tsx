import { CloseIcon, LogoIcon } from '../svg';

export default function Modal({setIsModalOpen}: {setIsModalOpen: (arg: boolean) => void}) {

  return (
    <div className="modal is-active">
      <div className="modal__wrapper">
        <div className="modal__overlay" data-close-modal></div>
        <div className="modal__content">
          <div className="modal__logo">
            <LogoIcon />
            <span>ЛигаБанк</span>
            <span>Интернет-банк</span>
            <button type="button" aria-label="Закрыть" tabIndex={0} onClick={() => setIsModalOpen(false)}>
              <CloseIcon />
            </button>
          </div>

          <label className="modal__label" htmlFor="login-input">
            <input type="text" id="login-input"></input>
          </label>

          <label className="modal__label" htmlFor="password-input">
            <input type="text" id="password-input"></input>
          </label>

          <button className="modal__submit" type="button">Войти</button>
        </div>
      </div>
    </div>
  );
}
