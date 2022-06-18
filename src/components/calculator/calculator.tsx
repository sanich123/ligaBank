import { useState } from 'react';
import {  purposesOfCredit } from '../../utils/const';
import { totalCredit } from '../../utils/utils';
import ModalSuccess from '../modal/modal-success';
import Proposal from './proposal';
import ProposalError from './proposal-error';
import StepOne from './step-one';
import StepThree from './step-three';
import StepTwo from './step-two';

export default function Calculator() {
  const [goal, setGoal] = useState(purposesOfCredit.notSelected);
  const [price, setPrice] = useState('');
  const [typedDeposite, setTypedDeposite] = useState('');
  const [rangeOfTime, setRangeOfTime] = useState('');
  const [isMotherCapital, setIsMotherCapital] = useState(false);
  const [isNeedInsurance, setIsNeedInsurance] = useState(false);
  const [isNeedKasko, setIsNeedKasko] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);

  const {isVisible, totalSum, minSum, typeOfCredit, calculatedPercent, monthPayment, type, type2, type3, currentPrice, currentDeposite, currentRangeOfTime, minTime, maxTime, minPrice, maxPrice, stepOfPrice } = totalCredit(isNeedKasko, isNeedInsurance, isMotherCapital, goal, price, typedDeposite, rangeOfTime);

  return (
    <div className="grid-layout">
      <div className="step1-step2">
        <StepOne
          setGoal={setGoal}
          setPrice={setPrice}
          setTypedDeposite={setTypedDeposite}
          setRangeOfTime={setRangeOfTime}
        />
        {(goal === purposesOfCredit.carCredit ||
            goal === purposesOfCredit.mortgage) && (
          <StepTwo
            stepOfPrice={stepOfPrice}
            type2={type2}
            minPrice={minPrice}
            maxPrice={maxPrice}
            minTime={minTime}
            maxTime={maxTime}
            goal={goal}
            price={price}
            setPrice={setPrice}
            setIsMotherCapital={setIsMotherCapital}
            isMotherCapital={isMotherCapital}
            setIsNeedInsurance={setIsNeedInsurance}
            setIsNeedKasko={setIsNeedKasko}
            isNeedInsurance={isNeedInsurance}
            isNeedKasko={isNeedKasko}
            typedDeposite={typedDeposite}
            setTypedDeposite={setTypedDeposite}
            setRangeOfTime={setRangeOfTime}
            rangeOfTime={rangeOfTime}
          />
        )}
      </div>
      {goal !== purposesOfCredit.notSelected && (
        <div className="proposal">
          {isVisible && (
            <ProposalError minSum={minSum} typeOfCredit={typeOfCredit} />
          )}
          {!isVisible && (
            <Proposal
              totalSum={totalSum}
              type3={type3}
              calculatedPercent={calculatedPercent}
              monthPayment={monthPayment}
              setIsFormOpen={setIsFormOpen}
            />
          )}
        </div>
      )}
      {isFormOpen && (
        <StepThree
          type={type}
          type2={type2}
          currentPrice={currentPrice}
          currentDeposite={currentDeposite}
          currentRangeOfTime={currentRangeOfTime}
          setIsSuccessMessage={setIsSuccessMessage}
        />
      )}
      {isSuccessMessage && (
        <ModalSuccess setGoal={setGoal} setIsFormOpen={setIsFormOpen} setPrice={setPrice} setIsSuccessMessage={setIsSuccessMessage} />
      )}
    </div>
  );
}
