import { useState } from 'react';
import NumberFormat from 'react-number-format';
import { inputPatterns, inputTitles, storageKeys } from '../../../utils/const';

interface ApplicationFormProps {
  setIsSuccessMessage: (arg: boolean) => void;
  setIsFormOpen: (arg: boolean) => void;
}


export default function ApplicationForm({setIsSuccessMessage, setIsFormOpen}: ApplicationFormProps) {
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const inStorage = JSON.parse(localStorage.getItem(storageKeys.application) || '');
  const newId = inStorage?.pop().id + 1;

  const resetView = () => {
    setIsFormOpen(false);
    setIsSuccessMessage(true);
  };
  const handleSubmit = () => {
    if (!inStorage.length) {
      localStorage.setItem(
        storageKeys.application,
        JSON.stringify([{ id: 1, surname, phone, mail }]),
      );
      resetView();
    } else if (inStorage.length) {
      localStorage.setItem(
        storageKeys.application,
        JSON.stringify([...inStorage, { id: newId, surname, phone, mail }]),
      );
      resetView();
    }
  };
  return (
    <form className="submit-form" onSubmit={handleSubmit}>
      <label
        aria-label="Поле ввода текста"
        className="submit-form__surname-label"
      >
        <input
          className="submit-form__surname"
          type="text"
          placeholder="ФИО"
          value={surname}
          onChange={({ target }) => setSurname(target.value)}
          tabIndex={0}
          autoComplete=""
          required
          autoFocus
        />
      </label>
      <label aria-label="Поле ввода телефона">
        <NumberFormat
          className="submit-form__phone"
          format="+7 (9##) ###-##-##"
          placeholder="Телефон"
          type="tel"
          pattern={inputPatterns.phone}
          title={inputTitles.phone}
          mask="_"
          value={phone}
          onValueChange={({ formattedValue }) => setPhone(formattedValue)}
          tabIndex={0}
          autoComplete=""
          required
        />
      </label>
      <label aria-label="Поле ввода электронной почты">
        <input
          className="submit-form__mail"
          type="email"
          pattern={inputPatterns.email}
          title={inputTitles.email}
          placeholder="E-mail"
          value={mail}
          onChange={({ target }) => setMail(target.value)}
          tabIndex={0}
          autoComplete=""
          required
        />
      </label>

      <button className="submit-form__btn btn" type="submit" tabIndex={0}>
        Отправить
      </button>
    </form>
  );
}
