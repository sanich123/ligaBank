import './proposal-styles.css';

interface ProposalProps {
  modificatorFour: string,
  totalSum: number,
  calculatedPercent: number,
  monthPayment: number,
  setIsFormOpen: (arg: boolean) => void,
  minTime: number,
  maxTime: number,
  currentRangeOfTime: number,
}

export default function Proposal({totalSum, calculatedPercent, monthPayment, modificatorFour, setIsFormOpen, minTime, maxTime, currentRangeOfTime}: ProposalProps) {
  const isError = monthPayment === Infinity;
  const isRightTime = currentRangeOfTime >= minTime && currentRangeOfTime <= maxTime;
  const formattedPercent = calculatedPercent.toFixed(2).replace('.', ',');

  return (
    <>
      <h3>Наше предложение</h3>
      <ul className="proposal-list">
        <li className="proposal-list__item">
          <h3>{totalSum.toLocaleString()} рублей</h3>
          <span>Сумма {modificatorFour}</span>
        </li>
        <li className="proposal-list__item">
          <h3>{formattedPercent}%</h3>
          <span>Процентная ставка</span>
        </li>
        <li className="proposal-list__item">
          {!isError && isRightTime && (
            <>
              <h3>{monthPayment.toLocaleString()} рублей</h3>
              <span>Ежемесячный платеж</span>
            </>
          )}
        </li>
        <li className="proposal-list__item">
          {!isError && isRightTime && (
            <>
              <h3>{Math.round(monthPayment * 2.1).toLocaleString()} рублей</h3>
              <span>Необходимый доход</span>
            </>
          )}
        </li>
      </ul>
      <button
        type="button"
        className="btn long-btn"
        onClick={() => setIsFormOpen(true)}
        aria-label="Оформить заявку"
      >
        Оформить заявку
      </button>
    </>
  );
}
