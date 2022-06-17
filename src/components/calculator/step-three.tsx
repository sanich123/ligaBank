import { useState } from 'react';
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

  const inStorage = JSON.parse(localStorage.getItem('application') || '');
  const newId = inStorage.pop().id + 1;
  const numberOfApplication = !inStorage.length ? 1 : newId;

  const handleSubmit = () => {
    if (!inStorage.length && surname && phone && mail) {
      localStorage.setItem('application', JSON.stringify([{id: 1, surname, phone, mail}]));
      setIsSuccessMessage(true);
    } else if (inStorage.length && surname && phone && mail) {
      localStorage.setItem('application', JSON.stringify([...inStorage, { id: newId, surname, phone, mail }]));
      setIsSuccessMessage(true);
    }
  };

  return (
    <div className="step3">
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
          placeholder="Телефон"
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
          tabIndex={0}
        />
        <input
          className="submit-form__mail"
          id="input-mail"
          type="mail"
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
