import PriceOfEstate from './priceOfEstate';

export default function Step2() {

  return (
    <>
      <h3>Шаг 2. Введите параметры кредита</h3>
      <div className="step-two-wrapper">

        <PriceOfEstate/>

        <div className="input-wrapper">
          <label className="price-label" htmlFor="input-deposit">
            Первоначальный взнос
          </label>
          <br />
          <input
            type="number"
            id="input-deposit"
            className="price-deposite"
            readOnly
          />
          <br />
          <input type="range" className="input-range" />
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
