import { useAllInputs } from '../../hooks/use-all-inputs';
import {  purposesOfCredit } from '../../utils/const';
import ModalSuccess from '../modal/modal-success';
import AmountOfTime from './step-two/amount-of-time';
import CreditPrice from './step-two/credit-price';
import FirstDeposite from './step-two/first-deposite';
import KaskoInsurance from './step-two/kasko-insurance';
import MaternalCapital from './step-two/maternal-capital';
import Proposal from './proposal/proposal';
import ProposalError from './proposal/proposal-error';
import StepOne from './step-one/step-one';
import StepThree from './step-three/step-three';

export default function Calculator() {

  const { isErrorProposal, totalSum, minSum, modificatorOne, calculatedPercent, monthPayment, modificatorTwo, modificatorThree, modificatorFour, currentPrice, currentDeposite,currentRangeOfTime, minTime, maxTime, minPrice, maxPrice, stepOfPrice, minPercent, setGoal, setPrice, setTypedDeposite, setRangeOfTime,setIsMotherCapital, setIsNeedInsurance, setIsNeedKasko, setIsFormOpen, setIsSuccessMessage, goal, price, typedDeposite, rangeOfTime,isMotherCapital, isNeedInsurance, isNeedKasko, isFormOpen, isSuccessMessage } = useAllInputs();

  const isCarOrMortgage = goal === purposesOfCredit.carCredit || goal === purposesOfCredit.mortgage;
  const isMortgage = goal === purposesOfCredit.mortgage;
  const isCarCredit = goal === purposesOfCredit.carCredit;

  return (
    <div className="grid-layout">
      <div className="step1-step2">
        <StepOne
          setGoal={setGoal}
          setPrice={setPrice}
          setTypedDeposite={setTypedDeposite}
          setRangeOfTime={setRangeOfTime}
        />
        {isCarOrMortgage && (
          <>
            <h3>Шаг 2. Введите параметры кредита</h3>
            <div className="step-two-wrapper">
              <CreditPrice
                minPrice={minPrice}
                maxPrice={maxPrice}
                price={price}
                setPrice={setPrice}
                nameOfProduct={modificatorThree}
                stepOfPrice={stepOfPrice}
                typedDeposite={typedDeposite}
                setTypedDeposite={setTypedDeposite}
                minPercent={minPercent}
              />
              <FirstDeposite
                typedDeposite={typedDeposite}
                setTypedDeposite={setTypedDeposite}
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
                />)}
              {isCarCredit && (
                <KaskoInsurance
                  isNeedInsurance={isNeedInsurance}
                  setIsNeedInsurance={setIsNeedInsurance}
                  isNeedKasko={isNeedKasko}
                  setIsNeedKasko={setIsNeedKasko}
                />)}
            </div>
          </>)}
      </div>
      {isCarOrMortgage && (
        <div className="proposal">
          {isErrorProposal && <ProposalError minSum={minSum} modificatorOne={modificatorOne} />}
          {!isErrorProposal && (
            <Proposal
              totalSum={totalSum}
              modificatorFour={modificatorFour}
              calculatedPercent={calculatedPercent}
              monthPayment={monthPayment}
              setIsFormOpen={setIsFormOpen}
            />)}
        </div>)}
      {isFormOpen && (
        <StepThree
          modificatorTwo={modificatorTwo}
          modificatorThree={modificatorThree}
          currentPrice={currentPrice}
          currentDeposite={currentDeposite}
          currentRangeOfTime={currentRangeOfTime}
          setIsSuccessMessage={setIsSuccessMessage}
          setIsFormOpen={setIsFormOpen}
        />)}
      {isSuccessMessage && (
        <ModalSuccess
          setGoal={setGoal}
          setIsFormOpen={setIsFormOpen}
          setPrice={setPrice}
          setIsSuccessMessage={setIsSuccessMessage}
        />)}
    </div>);
}
