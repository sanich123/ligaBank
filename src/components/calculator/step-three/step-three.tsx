import {  storageKeys } from '../../../utils/const';
import CreditInfo from './credit-info';
import ApplicationForm from './appliction-form';

interface StepThreeProps {
  modificatorTwo: string;
  modificatorThree: string;
  currentPrice: number;
  currentDeposite: number;
  currentRangeOfTime: number;
  setIsSuccessMessage: (arg: boolean) => void;
  setIsFormOpen: (arg: boolean) => void;
}

export default function StepThree({modificatorTwo, modificatorThree, currentPrice, currentDeposite, currentRangeOfTime, setIsSuccessMessage, setIsFormOpen}: StepThreeProps) {
  const inStorage = JSON.parse(localStorage.getItem(storageKeys.application) || '') || 0;
  const newId = inStorage.pop().id + 1;
  const numberOfApplication = !inStorage.length ? 1 : newId;

  return (
    <div className="step3">
      <CreditInfo
        numberOfApplication={numberOfApplication}
        type={modificatorTwo}
        modificatorThree={modificatorThree}
        currentDeposite={currentDeposite}
        currentPrice={currentPrice}
        currentRangeOfTime={currentRangeOfTime}
      />
      <ApplicationForm setIsSuccessMessage={setIsSuccessMessage} setIsFormOpen={setIsFormOpen} />
    </div>
  );
}
