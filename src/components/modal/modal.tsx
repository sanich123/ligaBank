import { CloseIcon, LogoIcon } from '../svg';
import {FocusOn} from 'react-focus-on';
import { useState } from 'react';

export default function Modal({setIsModalOpen}: {setIsModalOpen: (arg: boolean) => void}) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="modal is-active">
      <div className="modal__wrapper">
        <FocusOn
          onEscapeKey={() => setIsModalOpen(false)}
          onClickOutside={() => setIsModalOpen(false)}
        >
          <div className="modal__content">
            <div className="modal__logo">
              <div className="logo-description">
                <LogoIcon />
                <span>ЛигаБанк</span>
                <span>Интернет-банк</span>
              </div>
              <button
                className="modal__close--btn"
                type="button"
                aria-label="Закрыть"
                tabIndex={0}
                onClick={() => setIsModalOpen(false)}
              >
                <CloseIcon />
              </button>
            </div>

            <label className="modal__label" htmlFor="login-input">
              Логин
              <input
                type="text"
                id="login-input"
                autoFocus
                value={login}
                onChange={({target}) => setLogin(target.value)}
              />
            </label>

            <label className="modal__label" htmlFor="password-input">
              Пароль
              <input
                type="text"
                id="password-input"
                value={password}
                onChange={({target}) => setPassword(target.value)}
              />
              <span>Забыли пароль?</span>
            </label>

            <button
              className="modal__submit"
              type="button"
              onClick={() => {
                if (login && password) {
                  localStorage.setItem('loginPassword', JSON.stringify({ login, password }));
                  setIsModalOpen(false);
                }
              }}
            >
              Войти
            </button>
          </div>
        </FocusOn>
      </div>
    </div>
  );
}
