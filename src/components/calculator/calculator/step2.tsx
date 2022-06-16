import { purposesOfCredit } from '../../../utils/const';
import AmountOfTime from './amountOfTime';
import FirstDeposite from './firstDeposite';
import PriceOfEstate from './priceOfEstate';

interface Step2Props {
  price: string;
  setPrice: (arg: string) => void;
  setIsMotherCapital: (arg: boolean) => void;
  setIsNeedInsurance: (arg: boolean) => void;
  setIsNeedKasko: (arg: boolean) => void;
  isNeedInsurance: boolean,
  isNeedKasko: boolean,
  isMotherCapital: boolean;
  goal: string;
  typedDeposite: string,
  setTypedDeposite: (arg: string) => void,
  setRangeOfTime: (arg: string) => void,
  rangeOfTime: string,
}

export default function Step2({price, setPrice, setIsMotherCapital, isMotherCapital, goal, setIsNeedInsurance, setIsNeedKasko, isNeedInsurance, isNeedKasko, typedDeposite, setTypedDeposite, setRangeOfTime, rangeOfTime}: Step2Props) {

  return (
    <>
      <h3>Шаг 2. Введите параметры кредита</h3>
      <div className="step-two-wrapper">
        <PriceOfEstate goal={goal} price={price} setPrice={setPrice} />
        <FirstDeposite typedDeposite={typedDeposite} setTypedDeposite={setTypedDeposite} goal={goal} price={price} />
        <AmountOfTime setRangeOfTime={setRangeOfTime} rangeOfTime={rangeOfTime} />
        {goal === purposesOfCredit.mortgage && (
          <label>
            <input
              onChange={() => setIsMotherCapital(!isMotherCapital)}
              id="checkbox-input"
              type="checkbox"
            />
            Использовать материнский капитал
          </label>
        )}
        {goal === purposesOfCredit.carCredit && (
          <>
            <label>
              <input type="checkbox" onChange={() => setIsNeedKasko(!isNeedKasko)}/>
              Оформить КАСКО в нашем банке
            </label><br/>
            <label>
              <input type="checkbox" onChange={() => setIsNeedInsurance(!isNeedInsurance)}/>
              Оформить Страхование жизни в нашем банке
            </label>
          </>
        )}
      </div>
    </>
  );
}
