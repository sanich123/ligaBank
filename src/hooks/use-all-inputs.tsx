import { useState } from 'react';
import { MATERNITY_CAPITAL, MAX_CARCREDIT_PRICE, MAX_CARCREDIT_TIME, MAX_MORTGAGE_PERCENT, MAX_MORTGAGE_PRICE, MAX_MORTGAGE_TIME, MIN_CARCREDIT_PRICE, MIN_CARCREDIT_RANGE, MIN_CARCREDIT_SUM, MIN_CARCREDIT_TIME, MIN_MORTGAGE_PERCENT, MIN_MORTGAGE_PRICE, MIN_MORTGAGE_RANGE, MIN_MORTGAGE_SUM, MIN_MORTGAGE_TIME, purposesOfCredit, STEP_CARCREDIT_PRICE, STEP_MORTGAGE_PRICE } from '../utils/const';
import { getCleanedNumber, getCleanedTime, percentChanger } from '../utils/utils';

export function useAllInputs() {
  const [goal, setGoal] = useState(purposesOfCredit.notSelected);
  const [price, setPrice] = useState('');
  const [deposite, setDeposite] = useState('');
  const [rangeOfTime, setRangeOfTime] = useState('');
  const [isMotherCapital, setIsMotherCapital] = useState(false);
  const [isNeedInsurance, setIsNeedInsurance] = useState(false);
  const [isNeedKasko, setIsNeedKasko] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);

  const currentPrice = getCleanedNumber(price);
  const currentDeposite = getCleanedNumber(deposite);
  const currentRangeOfTime = getCleanedTime(rangeOfTime);
  const percentOfDeposite = (currentDeposite / currentPrice) * 100;

  if (goal === purposesOfCredit.mortgage) {
    const totalSum = currentPrice - currentDeposite - (isMotherCapital ? MATERNITY_CAPITAL : 0);
    const isErrorProposal = totalSum <= MIN_MORTGAGE_SUM;
    const minSum = MIN_MORTGAGE_SUM;
    const minPrice = MIN_MORTGAGE_PRICE;
    const maxPrice = MAX_MORTGAGE_PRICE;
    const minPercent = MIN_MORTGAGE_RANGE;
    const stepOfPrice = STEP_MORTGAGE_PRICE;
    const minTime = MIN_MORTGAGE_TIME;
    const maxTime = MAX_MORTGAGE_TIME;
    const modificatorOne = 'ипотечные кредиты';
    const modificatorTwo = 'ипотека';
    const modificatorThree = 'недвижимости';
    const modificatorFour = 'ипотеки';
    const calculatedPercent = percentOfDeposite < 15 ? MAX_MORTGAGE_PERCENT : MIN_MORTGAGE_PERCENT;
    const monthPercentage = (calculatedPercent * 0.001) / 12;
    const monthPayment = Math.round(totalSum * (monthPercentage / (1 - Math.pow(1 + monthPercentage, -(currentRangeOfTime * 12)))));

    return { isErrorProposal, totalSum, minSum, modificatorOne, calculatedPercent, monthPercentage, monthPayment, modificatorTwo, modificatorThree, modificatorFour, currentPrice, currentDeposite, currentRangeOfTime, minTime, maxTime, minPrice, maxPrice, stepOfPrice, minPercent, goal, price, deposite, rangeOfTime, isMotherCapital, isNeedInsurance, isNeedKasko, isFormOpen, isSuccessMessage, setGoal, setPrice, setDeposite,setRangeOfTime,  setIsMotherCapital, setIsNeedInsurance, setIsNeedKasko, setIsFormOpen, setIsSuccessMessage,
    };
  }

  const totalSum = currentPrice - currentDeposite;
  const isErrorProposal = totalSum <= MIN_CARCREDIT_SUM;
  const minSum = MIN_CARCREDIT_SUM;
  const minPrice = MIN_CARCREDIT_PRICE;
  const maxPrice = MAX_CARCREDIT_PRICE;
  const minPercent = MIN_CARCREDIT_RANGE;
  const stepOfPrice = STEP_CARCREDIT_PRICE;
  const minTime = MIN_CARCREDIT_TIME;
  const maxTime = MAX_CARCREDIT_TIME;
  const modificatorOne = 'автокредиты';
  const modificatorTwo = 'автокредит';
  const modificatorThree = 'автомобиля';
  const modificatorFour = 'автокредита';
  const calculatedPercent = percentChanger(isNeedKasko, isNeedInsurance, currentPrice);
  const monthPercentage = (calculatedPercent * 0.001) / 12;
  const monthPayment = Math.round(currentPrice * (monthPercentage / (1 - Math.pow(1 + monthPercentage, -(currentRangeOfTime * 12)))));

  return { isErrorProposal, totalSum, minSum, modificatorOne, calculatedPercent, monthPayment, modificatorTwo, modificatorThree, modificatorFour, currentPrice, currentDeposite,currentRangeOfTime, minTime, maxTime, minPrice, maxPrice, stepOfPrice, minPercent, goal, price, deposite, rangeOfTime, isMotherCapital, isNeedInsurance, isNeedKasko, isFormOpen, isSuccessMessage, setGoal, setPrice, setDeposite, setRangeOfTime, setIsMotherCapital,setIsNeedInsurance, setIsNeedKasko, setIsFormOpen, setIsSuccessMessage };
}

