// import { useState } from 'react';
// import { MATERNITY_CAPITAL, MAX_MORTGAGE_PERCENT, MIN_CARCREDIT_SUM, MIN_MORTGAGE_PERCENT, MIN_MORTGAGE_SUM, purposesOfCredit } from '../utils/const';
// import { getCleanedNumber, percentChanger } from '../utils/utils';

// export default function UseAllInputs() {
//   const [goal, setGoal] = useState('');
//   const [price, setPrice] = useState('');
//   const [typedDeposite, setTypedDeposite] = useState('');
//   const [rangeOfTime, setRangeOfTime] = useState('');
//   const [isMotherCapital, setIsMotherCapital] = useState(false);
//   const [isNeedInsurance, setIsNeedInsurance] = useState(false);
//   const [isNeedKasko, setIsNeedKasko] = useState(false);
//   const [isFormOpen, setIsFormOpen] = useState(false);

//   const currentPrice = getCleanedNumber(price);
//   const currentDeposite = getCleanedNumber(typedDeposite);
//   const currentRangeOfTime = getCleanedNumber(rangeOfTime);
//   const percentOfDeposite = (currentDeposite / currentPrice) * 100;

//   if (goal === purposesOfCredit.mortgage) {
//     const totalSum = currentPrice - currentDeposite - (isMotherCapital ? MATERNITY_CAPITAL : 0);
//     const isVisible = totalSum <= MIN_MORTGAGE_SUM;
//     const minSum = MIN_MORTGAGE_SUM;
//     const typeOfCredit = 'ипотечные кредиты';
//     const type = 'ипотека';
//     const type2 = 'недвижимости';
//     const type3 = 'ипотеки';
//     const calculatedPercent = percentOfDeposite < 15 ? MAX_MORTGAGE_PERCENT : MIN_MORTGAGE_PERCENT;
//     const monthPercentage = (calculatedPercent * 0.001) / 12;
//     const monthPayment = Math.trunc(
//       currentPrice *
//           (monthPercentage /
//             ((1 + monthPercentage) - currentRangeOfTime - 1)),
//     );
//     return {
//       isVisible,
//       totalSum,
//       minSum,
//       typeOfCredit,
//       calculatedPercent,
//       monthPercentage,
//       monthPayment,
//       type,
//       type2,
//       type3,
//       currentPrice,
//       currentDeposite,
//       currentRangeOfTime,
//     };
//   }
//   const totalSum = getCleanedNumber(price) - getCleanedNumber(typedDeposite);
//   const isVisible = totalSum < MIN_CARCREDIT_SUM;
//   const minSum = MIN_CARCREDIT_SUM;
//   const typeOfCredit = 'автокредиты';
//   const type = 'автокредит';
//   const type2 = 'автомобиля';
//   const type3 = 'автокредита';
//   const calculatedPercent = percentChanger(
//     isNeedKasko,
//     isNeedInsurance,
//     currentPrice,
//   );
//   const monthPercentage = (calculatedPercent * 0.001) / 12;
//   const monthPayment = Math.trunc(
//     currentPrice *
//         (monthPercentage /
//           (1 - Math.pow(1 + monthPercentage, -(Number(rangeOfTime) * 12)))),
//   );
//   return {
//     isVisible,
//     totalSum,
//     minSum,
//     typeOfCredit,
//     calculatedPercent,
//     monthPayment,
//     type,
//     type2,
//     type3,
//     currentPrice,
//     currentDeposite,
//     currentRangeOfTime,
//   };
// }
export {};
