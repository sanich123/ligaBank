import { navLinks } from '../../utils/const';
import { Logo, UserCabinet } from '../svgs';
import './header-styles.css';

interface HeaderProps {
  setIsModalOpen: (arg: boolean) => void,
}
export default function Header({setIsModalOpen}: HeaderProps) {

  return (
    <header>
      <nav className="header-nav container">
        <a
          aria-labelledby="Ссылка на главную страницу, логотип" className="header-nav__logo" href="/"
        >
          <Logo />
          ЛИГА Банк
        </a>
        <ul className="header-nav__menu">
          {navLinks.map((link) => (
            <li key={link} className="header-nav__menu-item">
              <a href="/" aria-labelledby="Навигационная ссылка">{link}</a>
            </li>
          ))}
        </ul>
        <button
          className="header-nav__cabinet"
          aria-label="Войти в интернет-банк"
          onClick={() => setIsModalOpen(true)}
        >
          <span>
            <UserCabinet />
          </span>
          <span className="header-nav__cabinet-text">
            Войти в Интернет-банк
          </span>
        </button>
      </nav>
    </header>
  );
}
