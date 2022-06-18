interface ProposalProps {
  type3: string,
  totalSum: number,
  calculatedPercent: number,
  monthPayment: number,
  setIsFormOpen: (arg: boolean) => void,
}

export default function Proposal({totalSum, calculatedPercent, monthPayment, type3, setIsFormOpen}: ProposalProps) {
  const isError = monthPayment === Infinity;

  return (
    <>
      <h3>Наше предложение</h3>
      <ul className="proposal-list">
        <li className="proposal-list__item">
          <h3>{totalSum.toLocaleString()} рублей</h3>
          <span>Сумма {type3}</span>
        </li>
        <li className="proposal-list__item">
          <h3>{calculatedPercent}%</h3>
          <span>Процентная ставка</span>
        </li>
        <li className="proposal-list__item">
          {!isError && (
            <>
              <h3>{monthPayment.toLocaleString()} рублей</h3>
              <span>Ежемесячный платеж</span>
            </>)}
        </li>
        <li className="proposal-list__item">
          {!isError && (
            <>
              <h3>{Math.round((monthPayment * 2.1)).toLocaleString()} рублей</h3>
              <span>Необходимый доход</span>
            </>)}
        </li>
      </ul>
      <button
        type="button"
        className="btn long-btn"
        onClick={() => setIsFormOpen(true)}
      >
        Оформить заявку
      </button>
    </>);
}
