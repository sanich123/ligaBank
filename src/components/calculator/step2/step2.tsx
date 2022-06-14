import { useState } from 'react';
import { MIN_PRICE } from '../../../utils/const';
import { getCleanedNumber } from '../../../utils/utils';
import PriceOfEstate from './priceOfEstate';

export default function Step2() {
  const initialPrice = `${MIN_PRICE.toLocaleString()} рублей`;
  const [price, setPrice] = useState(initialPrice);
  console.log(price);
  return (
    <>
      <h3>Шаг 2. Введите параметры кредита</h3>
      <div className="step-two-wrapper">

        <PriceOfEstate price={price} setPrice={setPrice} />

        <div className="input-wrapper">
          <label className="price-label" htmlFor="input-deposit">
            Первоначальный взнос
          </label>
          <br />
          <input
            type="text"
            id="input-deposit"
            className="price-deposite"
            value={`${(getCleanedNumber(price) / 10).toLocaleString()} рублей`}
            tabIndex={0}
          />
          <br />
          <input
            type="range"
            className="input-range"
            min="10"
            max="100"
            step="5"
            value={getCleanedNumber(price) / 100000}
            onChange={({target}) => console.log(target.value)}
          />
          <br />
          <span className="sub-input">10%</span>
        </div>
        <div className="input-wrapper">
          <label className="price-label" htmlFor="input-time">
            Срок кредитования
          </label>
          <br />
          <input
            className="input-time"
            type="number"
            id="input-time"
            readOnly
          />
          <br />
          <input type="range" className="input-range" />
          <br />
          <span className="sub-input">5 лет</span>
          <span className="sub-input">30 лет</span>
        </div>

        <input id="checkbox-input" type="checkbox" />
        <label htmlFor="checkbox-input">Использовать материнский капитал</label>
      </div>
    </>
  );
}
