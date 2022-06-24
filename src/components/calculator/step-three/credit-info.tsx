import { getFormattedValue, getRightZeroes } from '../../../utils/utils';

interface CreditInfoProps {
  numberOfApplication: number,
  type: string,
  modificatorThree: string,
  currentPrice: number,
  currentDeposite: number,
  currentRangeOfTime: number,
}


export default function CreditInfo({numberOfApplication, type, modificatorThree, currentPrice, currentDeposite, currentRangeOfTime}: CreditInfoProps) {
  return (
    <>
      <h3>Шаг 3. Оформление заявки</h3>
      <ul className="step3-description__list">
        <li className="step3-description__item">
          <strong>Номер заявки</strong>
          <span>№ {getRightZeroes(numberOfApplication)}</span>
        </li>
        <li className="step3-description__item">
          <strong>Цель кредита</strong>
          <span>{`${type[0].toUpperCase()}${type.slice(1)}`}</span>
        </li>
        <li className="step3-description__item">
          <strong>Стоимость {modificatorThree}</strong>
          <span>{currentPrice.toLocaleString()} рублей</span>
        </li>
        <li className="step3-description__item">
          <strong>Первоначальный взнос</strong>
          <span>{currentDeposite.toLocaleString()} рублей</span>
        </li>
        <li className="step3-description__item">
          <strong>Срок кредитования</strong>
          <span>{getFormattedValue(`${currentRangeOfTime}`)}</span>
        </li>
      </ul>
    </>
  );
}
