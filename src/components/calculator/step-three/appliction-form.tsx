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

  const checkKeys = localStorage.getItem(storageKeys.application);
  const inStorage = checkKeys !== null ? JSON.parse(checkKeys) : [{ id: 0 }];

  const newId = inStorage.pop().id + 1;

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
      <label className="submit-form__surname-label">
        <input
          className="submit-form__surname"
          type="text"
          placeholder="ФИО"
          aria-label="Поле ввода текста"
          value={surname}
          onChange={({ target }) => setSurname(target.value)}
          tabIndex={0}
          autoComplete=""
          required
          autoFocus
        />
      </label>
      <label>
        <NumberFormat
          className="submit-form__phone"
          format="+7 (9##) ###-##-##"
          placeholder="Телефон"
          type="tel"
          aria-label="Поле ввода телефона"
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
      <label>
        <input
          className="submit-form__mail"
          type="email"
          aria-label="Поле ввода электронной почты"
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

      <button aria-label="Отправить" className="submit-form__btn btn" type="submit" tabIndex={0}>
        Отправить
      </button>
    </form>
  );
}
