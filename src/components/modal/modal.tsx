import { CloseIcon, IsVisible, LogoIcon } from '../svg';
import {FocusOn} from 'react-focus-on';
import { useEffect, useState } from 'react';
import { inputPatterns, inputTitles, storageKeys } from '../../utils/const';

export default function Modal({setIsModalOpen}: {setIsModalOpen: (arg: boolean) => void}) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isSwinging = isError ? 'swinging' : '';
  const isRedBorder = isError ? '3px solid red' : '4px solid #2C36F2';
  const isEmptyLogin = isError ? 'Не должно быть пусто' : 'Логин';
  const isEmptyPassword = isError ? 'Не должно быть пусто' : 'Пароль';
  const typeChanger = isVisible ? 'text' : 'password';

  const handleClick = () => {
    if (!login || !password) {
      setIsError(true);
    }
    if (login && password) {
      localStorage.setItem(storageKeys.loginPassword, JSON.stringify({ login, password }));
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsError(false), 1500);
    return () => clearTimeout(timeout);
  });

  return (
    <div className="modal is-active">
      <div className="modal__wrapper">
        <FocusOn
          onEscapeKey={() => setIsModalOpen(false)}
          onClickOutside={() => setIsModalOpen(false)}
        >
          <div
            className={`modal__content ${isSwinging}`}
            style={{ border: isRedBorder }}
          >
            <div className="modal__logo">
              <div className="modal__logo--wrapper">
                <span>
                  <LogoIcon />
                </span>
                <span className="description-wrapper">
                  <span className="description-brand">ЛигаБанк</span>
                  <span className="description-text">Интернет-банк</span>
                </span>
              </div>
              <button
                className="modal__logo--close-btn"
                type="button"
                aria-label="Закрыть"
                tabIndex={0}
                onClick={() => setIsModalOpen(false)}
              >
                <CloseIcon />
              </button>
            </div>
            <label className="modal__label">
              <span className="modal__label--text">{isEmptyLogin}</span>
              <input
                type="text"
                autoFocus
                value={login}
                onChange={({ target }) => setLogin(target.value)}
                tabIndex={0}
                autoComplete=""
              />
            </label>

            <label className="modal__label">
              <span className="modal__label--text">{isEmptyPassword}</span>
              <input
                type={typeChanger}
                pattern={inputPatterns.password}
                title={inputTitles.password}
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                tabIndex={0}
                autoComplete=""
              />
              <button
                className="modal__label--btn"
                type="button"
                onClick={() => setIsVisible(!isVisible)}
                tabIndex={0}
                aria-label="Показать пароль"
              >
                <IsVisible />
              </button>
              <a href="/">Забыли пароль?</a>
            </label>

            <button
              className="modal__submit--btn btn"
              type="button"
              onClick={handleClick}
              tabIndex={0}
            >
              Войти
            </button>
          </div>
        </FocusOn>
      </div>
    </div>
  );
}
