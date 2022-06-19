import { useState } from 'react';
import {  purposesOfCredit } from '../../utils/const';
import { totalCredit } from '../../utils/utils';
import ModalSuccess from '../modal/modal-success';
import AmountOfTime from './amount-of-time';
import CreditPrice from './credit-price';
import FirstDeposite from './firstDeposite';
import KaskoInsurance from './kasko-insurance';
import MaternalCapital from './maternal-capital';
import Proposal from './proposal';
import ProposalError from './proposal-error';
import StepOne from './step-one';
import StepThree from './step-three';

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
  const isCarOrMortgage = goal === purposesOfCredit.carCredit || goal === purposesOfCredit.mortgage;
  const isMortgage = goal === purposesOfCredit.mortgage;
  const isCarCredit = goal === purposesOfCredit.carCredit;

  const {isVisible, totalSum, minSum, typeOfCredit, calculatedPercent, monthPayment, type, type2, type3, currentPrice, currentDeposite, currentRangeOfTime, minTime, maxTime, minPrice, maxPrice, stepOfPrice, minPercent } = totalCredit(isNeedKasko, isNeedInsurance, isMotherCapital, goal, price, typedDeposite, rangeOfTime);

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
                nameOfProduct={type2}
                stepOfPrice={stepOfPrice}
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
          {isVisible && <ProposalError minSum={minSum} typeOfCredit={typeOfCredit} />}
          {!isVisible && (
            <Proposal
              totalSum={totalSum}
              type3={type3}
              calculatedPercent={calculatedPercent}
              monthPayment={monthPayment}
              setIsFormOpen={setIsFormOpen}
            />)}
        </div>)}
      {isFormOpen && (
        <StepThree
          type={type}
          type2={type2}
          currentPrice={currentPrice}
          currentDeposite={currentDeposite}
          currentRangeOfTime={currentRangeOfTime}
          setIsSuccessMessage={setIsSuccessMessage}
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
