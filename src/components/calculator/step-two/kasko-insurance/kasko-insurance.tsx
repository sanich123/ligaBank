import '../maternal-capital/checkbox-styles.css';

interface KaskoInsuranceProps {
  isNeedKasko: boolean,
  isNeedInsurance: boolean,
  setIsNeedKasko: (arg: boolean) => void,
  setIsNeedInsurance: (arg: boolean) => void,
}


export default function KaskoInsurance({isNeedKasko, isNeedInsurance, setIsNeedInsurance, setIsNeedKasko}: KaskoInsuranceProps) {

  return (
    <>
      <input
        id="kasko-checkbox"
        className="custom-checkbox"
        type="checkbox"
        onChange={() => setIsNeedKasko(!isNeedKasko)}
        aria-labelledby="Оформление каско в нашем банке"
      />
      <label
        htmlFor="kasko-checkbox"
        className="label-checkbox"
      >
        Оформить КАСКО в нашем банке
      </label>

      <input
        id="insurance-checkbox"
        className="custom-checkbox"
        type="checkbox"
        onChange={() => setIsNeedInsurance(!isNeedInsurance)}
        aria-labelledby="Оформление страхования жизни в нашем банке"
      />
      <label htmlFor="insurance-checkbox" className="label-checkbox">
        Оформить Страхование жизни в нашем банке
      </label>
    </>
  );
}
