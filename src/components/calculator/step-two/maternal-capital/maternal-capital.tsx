import './checkbox-styles.css';

interface MaternalCapitalProps {
  setIsMotherCapital: (arg: boolean) => void,
  isMotherCapital: boolean,
}

export default function MaternalCapital({setIsMotherCapital, isMotherCapital}: MaternalCapitalProps) {

  return (
    <>
      <input
        id="label-checkbox"
        className="custom-checkbox"
        onChange={() => setIsMotherCapital(!isMotherCapital)}
        type="checkbox"
        aria-labelledby="Использовать материнский капитал"
      />
      <label
        htmlFor="label-checkbox"
        className="label-checkbox"
      >
        Использовать материнский капитал
      </label>
    </>
  );
}
