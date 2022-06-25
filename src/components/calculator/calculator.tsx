import { useAllInputs } from '../../hooks/use-all-inputs';
import { purposesOfCredit } from '../../utils/const';
import ModalSuccess from '../modal/modal-success';
import AmountOfTime from './step-two/amount-of-time/amount-of-time';
import CreditPrice from './step-two/credit-price';
import FirstDeposite from './step-two/first-deposite/first-deposite';
import KaskoInsurance from './step-two/kasko-insurance/kasko-insurance';
import MaternalCapital from './step-two/maternal-capital/maternal-capital';
import Proposal from './proposal/proposal/proposal';
import ProposalError from './proposal/proposal-error/proposal-error';
import StepOne from './step-one/step-one';
import StepThree from './step-three/step-three';
import './calculator-styles.css';

export default function Calculator() {
  const { isErrorProposal, totalSum, minSum, modificatorOne, calculatedPercent, monthPayment, modificatorTwo, modificatorThree, modificatorFour, currentPrice, currentDeposite, currentRangeOfTime, minTime, maxTime, minPrice, maxPrice, stepOfPrice, minPercent, setGoal, setPrice, setDeposite, setRangeOfTime,setIsMotherCapital, setIsNeedInsurance, setIsNeedKasko, setIsFormOpen, setIsSuccessMessage, goal, price, deposite, rangeOfTime,isMotherCapital, isNeedInsurance, isNeedKasko, isFormOpen, isSuccessMessage } = useAllInputs();

  const isCarOrMortgage = goal === purposesOfCredit.carCredit || goal === purposesOfCredit.mortgage;
  const isMortgage = goal === purposesOfCredit.mortgage;
  const isCarCredit = goal === purposesOfCredit.carCredit;

  return (
    <div className="calculator__layout" id="calculator">
      <div className="steps">
        <StepOne
          goal={goal}
          setGoal={setGoal}
          setPrice={setPrice}
          setDeposite={setDeposite}
          setRangeOfTime={setRangeOfTime}
        />
        {isCarOrMortgage && (
          <div className="calculator__layout--steps">
            <CreditPrice
              minPrice={minPrice}
              maxPrice={maxPrice}
              price={price}
              setPrice={setPrice}
              nameOfProduct={modificatorThree}
              stepOfPrice={stepOfPrice}
              deposite={deposite}
              setDeposite={setDeposite}
              minPercent={minPercent}
            />
            <FirstDeposite
              deposite={deposite}
              setDeposite={setDeposite}
              price={price}
              minPercent={minPercent}
            />
            <AmountOfTime
              minTime={minTime}
              maxTime={maxTime}
              setRangeOfTime={setRangeOfTime}
              rangeOfTime={rangeOfTime}
            />
            {isMortgage && (
              <MaternalCapital
                isMotherCapital={isMotherCapital}
                setIsMotherCapital={setIsMotherCapital}
              />
            )}
            {isCarCredit && (
              <KaskoInsurance
                isNeedInsurance={isNeedInsurance}
                setIsNeedInsurance={setIsNeedInsurance}
                isNeedKasko={isNeedKasko}
                setIsNeedKasko={setIsNeedKasko}
              />
            )}
          </div>
        )}
      </div>
      {isCarOrMortgage && (
        <>
          {isErrorProposal && (
            <ProposalError minSum={minSum} modificatorOne={modificatorOne} />
          )}
          {!isErrorProposal && (
            <Proposal
              minTime={minTime}
              maxTime={maxTime}
              currentRangeOfTime={currentRangeOfTime}
              totalSum={totalSum}
              modificatorFour={modificatorFour}
              calculatedPercent={calculatedPercent}
              monthPayment={monthPayment}
              setIsFormOpen={setIsFormOpen}
            />
          )}
        </>
      )}

      {isFormOpen && (
        <StepThree
          modificatorTwo={modificatorTwo}
          modificatorThree={modificatorThree}
          currentPrice={currentPrice}
          currentDeposite={currentDeposite}
          currentRangeOfTime={currentRangeOfTime}
          setIsSuccessMessage={setIsSuccessMessage}
          setIsFormOpen={setIsFormOpen}
        />
      )}
      {isSuccessMessage && (
        <ModalSuccess
          setGoal={setGoal}
          setIsFormOpen={setIsFormOpen}
          setPrice={setPrice}
          setIsSuccessMessage={setIsSuccessMessage}
        />
      )}
    </div>
  );
}
