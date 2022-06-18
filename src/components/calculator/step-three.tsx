import { useEffect, useState } from 'react';
import { storageKeys } from '../../utils/const';
import { getRightZeroes } from '../../utils/utils';

interface StepThreeProps {
  type: string,
  type2: string,
  currentPrice: number,
  currentDeposite: number,
  currentRangeOfTime: number,
  setIsSuccessMessage: (arg: boolean) => void,
}

export default function StepThree({type, type2, currentPrice, currentDeposite, currentRangeOfTime, setIsSuccessMessage}: StepThreeProps) {
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [isError, setIsError] = useState(false);

  const inStorage = JSON.parse(
    localStorage.getItem(storageKeys.application) || '',
  );
  const newId = inStorage.pop().id + 1;
  const numberOfApplication = !inStorage.length ? 1 : newId;
  const isAllRight = surname && phone && mail;

  const handleSubmit = () => {
    if (!surname || !phone || !mail) {
      setIsError(true);
    }
    if (!inStorage.length && isAllRight) {
      localStorage.setItem(storageKeys.application, JSON.stringify([{id: 1, surname, phone, mail}]));
      setIsSuccessMessage(true);
    } else if (inStorage.length && isAllRight) {
      localStorage.setItem(
        storageKeys.application,
        JSON.stringify([...inStorage, { id: newId, surname, phone, mail }]),
      );
      setIsSuccessMessage(true);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsError(false), 1500);
    return () => clearTimeout(timeout);
  });

  return (
    <div className={`step3 ${isError ? 'swinging' : ''}`}>
      <h3>Шаг 3. Оформление заявки</h3>
      <ul className="step3-description__list">
        <li className="step3-description__item">
          <strong>Номер заявки</strong>
          <span>№ {getRightZeroes(numberOfApplication)}</span>
        </li>
        <li className="step3-description__item">
          <strong>Цель кредита</strong>
          <span>{type}</span>
        </li>
        <li className="step3-description__item">
          <strong>Стоимость {type2}</strong>
          <span>{currentPrice.toLocaleString()} рублей</span>
        </li>
        <li className="step3-description__item">
          <strong>Первоначальный взнос</strong>
          <span>{currentDeposite.toLocaleString()} рублей</span>
        </li>
        <li className="step3-description__item">
          <strong>Срок кредитования</strong>
          <span>{currentRangeOfTime} лет</span>
        </li>
      </ul>
      <div className="submit-form">
        <input
          className="submit-form__surname"
          id="input-surname"
          type="text"
          placeholder="ФИО"
          value={surname}
          onChange={({ target }) => setSurname(target.value)}
          tabIndex={0}
          autoFocus
        />
        <input
          className="submit-form__phone"
          id="input-phone"
          type="tel"
          pattern="(\+?\d[- .]*){7,13}"
          title="Международный, государственный или местный телефонный номер"
          placeholder="Телефон"
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
          tabIndex={0}
        />
        <input
          className="submit-form__mail"
          id="input-mail"
          type="email"
          pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
          placeholder="E-mail"
          value={mail}
          onChange={({ target }) => setMail(target.value)}
          tabIndex={0}
        />
        <button
          onClick={handleSubmit}
          className="submit-form__btn btn"
          type="submit"
          tabIndex={0}
        >
          Отправить
        </button>
      </div>
    </div>
  );
}
