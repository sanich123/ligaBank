import { useState } from 'react';
import { MATERNITY_CAPITAL, MAX_CARCREDIT_PRICE, MAX_CARCREDIT_TIME, MAX_MORTGAGE_PERCENT, MAX_MORTGAGE_PRICE, MAX_MORTGAGE_TIME, MIN_CARCREDIT_PRICE, MIN_CARCREDIT_SUM, MIN_CARCREDIT_TIME, MIN_MORTGAGE_PERCENT, MIN_MORTGAGE_PRICE, MIN_MORTGAGE_SUM, MIN_MORTGAGE_TIME, purposesOfCredit, STEP_CARCREDIT_PRICE, STEP_MORTGAGE_PRICE } from '../utils/const';
import { getCleanedNumber, getCleanedTime, percentChanger } from '../utils/utils';

export function useAllInputs() {
  const [goal, setGoal] = useState(purposesOfCredit.notSelected);
  const [price, setPrice] = useState('');
  const [typedDeposite, setTypedDeposite] = useState('');
  const [rangeOfTime, setRangeOfTime] = useState('');
  const [isMotherCapital, setIsMotherCapital] = useState(false);
  const [isNeedInsurance, setIsNeedInsurance] = useState(false);
  const [isNeedKasko, setIsNeedKasko] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);
  const currentPrice = getCleanedNumber(price);
  const currentDeposite = getCleanedNumber(typedDeposite);
  const currentRangeOfTime = getCleanedTime(rangeOfTime);
  const percentOfDeposite = (currentDeposite / currentPrice) * 100;

  if (goal === purposesOfCredit.mortgage) {
    const totalSum =
      currentPrice -
      currentDeposite -
      (isMotherCapital ? MATERNITY_CAPITAL : 0);
    const isVisible = totalSum <= MIN_MORTGAGE_SUM;
    const minSum = MIN_MORTGAGE_SUM;
    const minPrice = MIN_MORTGAGE_PRICE;
    const maxPrice = MAX_MORTGAGE_PRICE;
    const minPercent = 10;
    const stepOfPrice = STEP_MORTGAGE_PRICE;
    const minTime = MIN_MORTGAGE_TIME;
    const maxTime = MAX_MORTGAGE_TIME;
    const typeOfCredit = 'ипотечные кредиты';
    const type = 'ипотека';
    const type2 = 'недвижимости';
    const type3 = 'ипотеки';
    const calculatedPercent =
      percentOfDeposite < 15 ? MAX_MORTGAGE_PERCENT : MIN_MORTGAGE_PERCENT;
    const monthPercentage = (calculatedPercent * 0.001) / 12;
    const monthPayment = Math.round(
      totalSum *
        (monthPercentage /
          (1 - Math.pow(1 + monthPercentage, -(currentRangeOfTime * 12)))),
    );
    return {
      isVisible,
      totalSum,
      minSum,
      typeOfCredit,
      calculatedPercent,
      monthPercentage,
      monthPayment,
      type,
      type2,
      type3,
      currentPrice,
      currentDeposite,
      currentRangeOfTime,
      minTime,
      maxTime,
      minPrice,
      maxPrice,
      stepOfPrice,
      minPercent,
      setGoal, setPrice, setTypedDeposite,setRangeOfTime, setIsMotherCapital, setIsNeedInsurance, setIsNeedKasko, setIsFormOpen, setIsSuccessMessage,
      goal, price, typedDeposite, rangeOfTime, isMotherCapital, isNeedInsurance, isNeedKasko, isFormOpen, isSuccessMessage,
    };
  }
  const totalSum = currentPrice - currentDeposite;
  const isVisible = totalSum < MIN_CARCREDIT_SUM;
  const minSum = MIN_CARCREDIT_SUM;
  const typeOfCredit = 'автокредиты';
  const minPrice = MIN_CARCREDIT_PRICE;
  const maxPrice = MAX_CARCREDIT_PRICE;
  const minPercent = 20;
  const stepOfPrice = STEP_CARCREDIT_PRICE;
  const minTime = MIN_CARCREDIT_TIME;
  const maxTime = MAX_CARCREDIT_TIME;
  const type = 'автокредит';
  const type2 = 'автомобиля';
  const type3 = 'автокредита';
  const calculatedPercent = percentChanger(isNeedKasko, isNeedInsurance, currentPrice);
  const monthPercentage = (calculatedPercent * 0.001) / 12;
  const monthPayment = Math.round(
    currentPrice *
      (monthPercentage /
        (1 - Math.pow(1 + monthPercentage, -(currentRangeOfTime * 12)))),
  );
  return {
    isVisible,
    totalSum,
    minSum,
    typeOfCredit,
    calculatedPercent,
    monthPayment,
    type,
    type2,
    type3,
    currentPrice,
    currentDeposite,
    currentRangeOfTime,
    minTime,
    maxTime,
    minPrice,
    maxPrice,
    stepOfPrice,
    minPercent,
    setGoal,
    setPrice,
    setTypedDeposite,
    setRangeOfTime,
    setIsMotherCapital,
    setIsNeedInsurance,
    setIsNeedKasko,
    setIsFormOpen,
    setIsSuccessMessage,
    goal,
    price,
    typedDeposite,
    rangeOfTime,
    isMotherCapital,
    isNeedInsurance,
    isNeedKasko,
    isFormOpen,
    isSuccessMessage,
  };
}

