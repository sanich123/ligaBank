import { purposesOfCredit } from '../../utils/const';
import AmountOfTime from './amount-of-time';
import FirstDeposite from './firstDeposite';
import CreditPrice from './credit-price';

interface StepTwoProps {
  price: string;
  isNeedInsurance: boolean;
  isNeedKasko: boolean;
  isMotherCapital: boolean;
  goal: string;
  typedDeposite: string;
  rangeOfTime: string;
  minTime: number,
  maxTime: number,
  setPrice: (arg: string) => void;
  setIsMotherCapital: (arg: boolean) => void;
  setIsNeedInsurance: (arg: boolean) => void;
  setIsNeedKasko: (arg: boolean) => void;
  setTypedDeposite: (arg: string) => void;
  setRangeOfTime: (arg: string) => void;
  minPrice: number,
  maxPrice: number,
  type2: string,
  stepOfPrice: number,
}

export default function StepTwo({
  stepOfPrice,
  type2,
  minPrice,
  maxPrice,
  price,
  isNeedInsurance,
  isNeedKasko,
  typedDeposite,
  isMotherCapital,
  goal,
  rangeOfTime,
  minTime,
  maxTime,
  setPrice,
  setIsMotherCapital,
  setIsNeedInsurance,
  setIsNeedKasko,
  setTypedDeposite,
  setRangeOfTime,
}: StepTwoProps) {

  return (
    <>
      <h3>Шаг 2. Введите параметры кредита</h3>
      <div className="step-two-wrapper">
        <CreditPrice minPrice={minPrice} maxPrice={maxPrice} price={price} setPrice={setPrice} nameOfProduct={type2} stepOfPrice={stepOfPrice}/>
        <FirstDeposite
          typedDeposite={typedDeposite}
          setTypedDeposite={setTypedDeposite}
          price={price}
        />
        <AmountOfTime
          minTime={minTime}
          maxTime={maxTime}
          setRangeOfTime={setRangeOfTime}
          rangeOfTime={rangeOfTime}
        />
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
              <input
                type="checkbox"
                onChange={() => setIsNeedKasko(!isNeedKasko)}
              />
              Оформить КАСКО в нашем банке
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                onChange={() => setIsNeedInsurance(!isNeedInsurance)}
              />
              Оформить Страхование жизни в нашем банке
            </label>
          </>)}
      </div>
    </>
  );
}
