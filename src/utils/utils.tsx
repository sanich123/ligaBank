import { MATERNITY_CAPITAL, MAX_CARCREDIT_PERCENT, MAX_CARCREDIT_PRICE, MAX_CARCREDIT_TIME, MAX_MORTGAGE_PERCENT, MAX_MORTGAGE_PRICE, MAX_MORTGAGE_TIME, MEDIUM_CARCREDIT_PERCENT, MEDIUM_CARCREDIT_PRICE, MIN_CARCREDIT_PRICE, MIN_CARCREDIT_SUM, MIN_CARCREDIT_TIME, MIN_MORTGAGE_PERCENT, MIN_MORTGAGE_PRICE, MIN_MORTGAGE_SUM, MIN_MORTGAGE_TIME, purposesOfCredit, SMALLEST_CARCREDIT_PERCENT, SMALL_CARCREDIT_PERCENT, STEP_CARCREDIT_PRICE, STEP_MORTGAGE_PRICE } from './const';

export const getCleanedNumber = (formattedString: string) => +formattedString.replace(/\s/gi, '').replace(/рублей/gi, '');

export const getCleanedTime = (rangeOfTime: string) =>
  +rangeOfTime.replace(/лет/gi, '').replace(/года/gi, '').replace(/год/gi, '');

export const getFormattedValue = (string: string) => {
  if (!string) {
    return '';
  }
  const slicedDate = +string.slice(0,2);
  if (slicedDate === 21 || slicedDate === 1) {
    return `${string} год`;
  }
  if ((slicedDate < 5 && slicedDate > 1) || (slicedDate < 25 && slicedDate > 21)) {
    return `${string} года`;
  }
  return `${string} лет`;
};

export const percentChanger = (isKasko: boolean, isInsurance: boolean, price: number) => {
  if (isKasko && isInsurance) {
    return SMALLEST_CARCREDIT_PERCENT;
  }
  if (isKasko || isInsurance) {
    return SMALL_CARCREDIT_PERCENT;
  }
  if (price < MEDIUM_CARCREDIT_PRICE) {
    return MAX_CARCREDIT_PERCENT;
  }
  if (price >= MEDIUM_CARCREDIT_PRICE) {
    return MEDIUM_CARCREDIT_PERCENT;
  }
  return 0;
};

export const totalCredit = (isKasko: boolean, isInsurance: boolean,isMotherCapital: boolean, goal: string, price: string, deposite: string, rangeOfTime: string) => {
  const currentPrice = getCleanedNumber(price);
  const currentDeposite = getCleanedNumber(deposite);
  const currentRangeOfTime = getCleanedTime(rangeOfTime);
  const percentOfDeposite = (currentDeposite / currentPrice) * 100;

  if (goal === purposesOfCredit.mortgage) {
    const totalSum = currentPrice - currentDeposite - (isMotherCapital ? MATERNITY_CAPITAL : 0);
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
    const calculatedPercent = percentOfDeposite < 15 ? MAX_MORTGAGE_PERCENT : MIN_MORTGAGE_PERCENT;
    const monthPercentage = (calculatedPercent * 0.001) / 12;
    const monthPayment = Math.round(totalSum * (monthPercentage / (1 - Math.pow((1 + monthPercentage), -(currentRangeOfTime * 12)))));
    return { isVisible, totalSum, minSum, typeOfCredit, calculatedPercent, monthPercentage, monthPayment, type, type2, type3, currentPrice, currentDeposite, currentRangeOfTime, minTime, maxTime, minPrice, maxPrice, stepOfPrice, minPercent };
  }
  const totalSum = getCleanedNumber(price) - getCleanedNumber(deposite);
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
  const calculatedPercent = percentChanger(isKasko, isInsurance, currentPrice);
  const monthPercentage = (calculatedPercent * 0.001) / 12;
  const monthPayment = Math.round(currentPrice * (monthPercentage / (1 - Math.pow((1 + monthPercentage), -(currentRangeOfTime * 12)))));
  return { isVisible, totalSum, minSum, typeOfCredit, calculatedPercent, monthPayment, type, type2, type3, currentPrice, currentDeposite, currentRangeOfTime, minTime, maxTime, minPrice, maxPrice, stepOfPrice, minPercent };
};

export const getRightZeroes = (number: number) => {
  if (number < 10) {
    return `000${number}`;
  }
  if (number >= 10 && number < 100) {
    return `00${number}`;
  }
  if (number >= 100 && number < 1000) {
    return `0${number}`;
  }
  return `${number}`;
};


