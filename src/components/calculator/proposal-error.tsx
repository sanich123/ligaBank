interface ProposalErrorProps {
  minSum: number,
  typeOfCredit: string,
}

export default function ProposalError({typeOfCredit, minSum}: ProposalErrorProps) {
  return (
    <div className="proposal-wrong">
      <h3>
        Наш банк не выдаёт {typeOfCredit} меньше {minSum} рублей.
      </h3>
      <p>Попробуйте использовать другие параметры для расчёта.</p>
    </div>
  );
}
