import { MATERNITY_CAPITAL, MAX_MORTGAGE_PERCENT, MIN_CARCREDIT_SUM, MIN_MORTGAGE_PERCENT, MIN_MORTGAGE_SUM, purposesOfCredit } from './const';

export const getCleanedNumber = (formattedString: string) => +formattedString.replace(/\s/gi, '').replace(/рублей/gi, '');

export const getFormattedValue = (string: string) => {
  if (!string) {
    return '';
  }
  if (+string.slice(0, 2) === 21) {
    return `${string} год`;
  }
  if (+string.slice(0, 2) === 22 || +string.slice(0, 2) === 23 || +string.slice(0, 2) === 24) {
    return `${string} года`;
  }
  return `${string} лет`;
};
const percentChanger = (isKasko: boolean, isInsurance: boolean, price: number) => {
  if (isKasko && isInsurance) {
    return 3.5;
  }
  if (isKasko || isInsurance) {
    return 8.5;
  }
  if (price < 2000000) {
    return 16;
  }
  if (price >= 2000000) {
    return 15;
  }
  return 0;
};
export const totalCredit = (isKasko: boolean, isInsurance: boolean,isMotherCapital: boolean, goal: string, price: string, deposite: string, rangeOfTime: string) => {
  const currentPrice = getCleanedNumber(price);
  const currentDeposite = getCleanedNumber(deposite);
  const currentRangeOfTime = getCleanedNumber(rangeOfTime);
  const percentOfDeposite = (currentDeposite / currentPrice) * 100;

  if (goal === purposesOfCredit.mortgage) {
    const totalSum = currentPrice - currentDeposite - (isMotherCapital ? MATERNITY_CAPITAL : 0);
    const isVisible = totalSum <= MIN_MORTGAGE_SUM;
    const minSum = MIN_MORTGAGE_SUM;
    const typeOfCredit = 'ипотечные кредиты';
    const type = 'ипотека';
    const type2 = 'недвижимости';
    const type3 = 'ипотеки';
    const calculatedPercent = percentOfDeposite < 15 ? MAX_MORTGAGE_PERCENT : MIN_MORTGAGE_PERCENT;
    const monthPercentage = (calculatedPercent * 0.001) / 12;
    const monthPayment = Math.trunc(currentPrice * (
      monthPercentage / (1 - Math.pow((1 + monthPercentage), -(Number(rangeOfTime) * 12)))
    ));
    return { isVisible, totalSum, minSum, typeOfCredit, calculatedPercent, monthPercentage, monthPayment, type, type2, type3, currentPrice, currentDeposite, currentRangeOfTime };
  }
  const totalSum = getCleanedNumber(price) - getCleanedNumber(deposite);
  const isVisible = totalSum < MIN_CARCREDIT_SUM;
  const minSum = MIN_CARCREDIT_SUM;
  const typeOfCredit = 'автокредиты';
  const type = 'автокредит';
  const type2 = 'автомобиля';
  const type3 = 'автокредита';
  const calculatedPercent = percentChanger(isKasko, isInsurance, currentPrice);
  const monthPercentage = (calculatedPercent * 0.001) / 12;
  const monthPayment = Math.trunc(
    currentPrice *
        (monthPercentage /
          (1 - Math.pow(1 + monthPercentage, -(Number(rangeOfTime) * 12)))),
  );
  return { isVisible, totalSum, minSum, typeOfCredit, calculatedPercent, monthPayment, type, type2, type3, currentPrice, currentDeposite, currentRangeOfTime };
};


