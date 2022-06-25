import Logo from '../../common/logo';
import './header-styles.css';
import NavLinks from './nav-links';
import UserCabinetBtn from './user-cabinet-btn';

interface HeaderProps {
  setIsModalOpen: (arg: boolean) => void,
}

export default function Header({setIsModalOpen}: HeaderProps) {

  return (
    <header>
      <nav className="header-nav container">
        <Logo/>
        <NavLinks/>
        <UserCabinetBtn setIsModalOpen={setIsModalOpen} />
      </nav>
    </header>
  );
}
