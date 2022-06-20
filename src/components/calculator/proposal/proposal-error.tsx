interface ProposalErrorProps {
  minSum: number,
  modificatorOne: string,
}

export default function ProposalError({modificatorOne, minSum}: ProposalErrorProps) {
  return (
    <div className="proposal-wrong">
      <h3>
        Наш банк не выдаёт {modificatorOne} меньше {minSum} рублей.
      </h3>
      <p>Попробуйте использовать другие параметры для расчёта.</p>
    </div>
  );
}
