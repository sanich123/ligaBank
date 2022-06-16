interface StepThreeProps {
  type: string,
  type2: string,
  currentPrice: number,
  currentDeposite: number,
  currentRangeOfTime: number,
}

export default function StepThree({type, type2, currentPrice, currentDeposite, currentRangeOfTime}: StepThreeProps) {

  return (
    <div className="step3">
      <h3>Шаг 3. Оформление заявки</h3>
      <ul className="step3-description__list">
        <li className="step3-description__item">
          <strong>Номер заявки</strong>
          <span>№ 0010</span>
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
      <form className="submit-form">
        <input
          className="submit-form__surname"
          id="input-surname"
          type="text"
          placeholder="ФИО"
          autoFocus
        />
        <input
          className="submit-form__phone"
          id="input-phone"
          type="tel"
          placeholder="Телефон"
        />
        <input
          className="submit-form__mail"
          id="input-mail"
          type="mail"
          placeholder="E-mail"
        />
        <button className="submit-form__btn btn" type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
}
