import { UserCabinetIcon } from '../icons';

export default function UserCabinetBtn({setIsModalOpen}: {setIsModalOpen: (arg: boolean) => void}) {

  return (
    <button
      className="header-nav__cabinet"
      aria-label="Войти в интернет-банк"
      onClick={() => setIsModalOpen(true)}
    >
      <span>
        <UserCabinetIcon />
      </span>
      <span className="header-nav__cabinet-text">Войти в Интернет</span>
    </button>
  );
}
