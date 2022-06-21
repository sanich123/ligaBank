interface MaternalCapitalProps {
  setIsMotherCapital: (arg: boolean) => void,
  isMotherCapital: boolean,
}

export default function MaternalCapital({setIsMotherCapital, isMotherCapital}: MaternalCapitalProps) {

  return (
    <label>
      <input
        onChange={() => setIsMotherCapital(!isMotherCapital)}
        id="checkbox-input"
        type="checkbox"
        aria-labelledby="Использовать материнский капитал"
      />
      Использовать материнский капитал
    </label>
  );
}
