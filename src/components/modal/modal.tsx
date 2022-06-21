import {FocusOn} from 'react-focus-on';
import { useEffect } from 'react';
import { inputPatterns, inputTitles, storageKeys } from '../../utils/const';
import { CloseIcon, IsVisible, LogoIcon } from '../svgs';
import UseAuthForm from '../../hooks/use-auth-form';

export default function Modal({setIsModalOpen}: {setIsModalOpen: (arg: boolean) => void}) {
  const { login, password, isError, isVisible, isSwinging, isRedBorder, isEmptyLogin, isEmptyPassword, typeChanger, setLogin, setPassword,  setIsError, setIsVisible} = UseAuthForm();

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
    if (isError) {
      const timeout = setTimeout(() => setIsError(false), 1500);
      return () => clearTimeout(timeout);
    }
  }, [isError, setIsError]);

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
                aria-labelledby="Поле ввода логина"
                onChange={({ target }) => setLogin(target.value)}
                tabIndex={0}
                autoComplete=""
                required
              />
            </label>

            <label className="modal__label">
              <span className="modal__label--text">{isEmptyPassword}</span>
              <input
                type={typeChanger}
                pattern={inputPatterns.password}
                title={inputTitles.password}
                value={password}
                aria-labelledby="Поле ввода пароля"
                onChange={({ target }) => setPassword(target.value)}
                tabIndex={0}
                autoComplete=""
                required
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
              <a href="/" aria-label="Ссылка на страницу, где можно поменять пароль">Забыли пароль?</a>
            </label>
            <button
              className="modal__submit--btn btn"
              type="button"
              onClick={handleClick}
              tabIndex={0}
              aria-label="Кнопка войти"
            >
              Войти
            </button>
          </div>
        </FocusOn>
      </div>
    </div>
  );
}
