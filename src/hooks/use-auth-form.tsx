import { useState } from 'react';

export default function UseAuthForm() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isSwinging = isError ? 'swinging' : '';
  const isRedBorder = isError ? '4px solid red' : '4px solid #2C36F2';
  const isEmptyLogin = isError ? 'Не должно быть пусто' : 'Логин';
  const isEmptyPassword = isError ? 'Не должно быть пусто' : 'Пароль';
  const typeChanger = isVisible ? 'text' : 'password';

  return {
    login,
    password,
    isError,
    isVisible,
    isSwinging,
    isRedBorder,
    isEmptyLogin,
    isEmptyPassword,
    typeChanger,
    setLogin,
    setPassword,
    setIsError,
    setIsVisible,
  };
}
