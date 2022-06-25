import { UserCabinet } from '../icons';

export default function UserCabinetBtn({setIsModalOpen}: {setIsModalOpen: (arg: boolean) => void}) {

  return (
    <button
      className="header-nav__cabinet"
      aria-label="Войти в интернет-банк"
      onClick={() => setIsModalOpen(true)}
    >
      <span>
        <UserCabinet />
      </span>
      <span className="header-nav__cabinet-text">Войти в Интернет-банк</span>
    </button>
  );
}
