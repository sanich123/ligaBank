import { MAX_CARCREDIT_PERCENT, MEDIUM_CARCREDIT_PERCENT, MEDIUM_CARCREDIT_PRICE, SMALLEST_CARCREDIT_PERCENT, SMALL_CARCREDIT_PERCENT } from './const';

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


