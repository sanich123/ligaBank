interface KaskoInsuranceProps {
  isNeedKasko: boolean,
  isNeedInsurance: boolean,
  setIsNeedKasko: (arg: boolean) => void,
  setIsNeedInsurance: (arg: boolean) => void,
}


export default function KaskoInsurance({isNeedKasko, isNeedInsurance, setIsNeedInsurance, setIsNeedKasko}: KaskoInsuranceProps) {

  return (
    <>
      <label>
        <input
          type="checkbox"
          onChange={() => setIsNeedKasko(!isNeedKasko)}
          aria-labelledby="Оформление каско в нашем банке"
        />
        Оформить КАСКО в нашем банке
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          onChange={() => setIsNeedInsurance(!isNeedInsurance)}
          aria-labelledby="Оформление страхования жизни в нашем банке"
        />
        Оформить Страхование жизни в нашем банке
      </label>
    </>
  );
}
