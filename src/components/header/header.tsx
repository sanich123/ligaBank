import { navLinks } from '../../utils/const';

export default function Header() {
  return (
    <header>
      <nav className="header-nav container">
        <a href="/">
          <span className="header-nav__logo">ЛИГА Банк</span>
        </a>
        <ul className="header-nav__menu">
          {navLinks.map((link) => (
            <li key={link} className="header-nav__menu-item">
              <a href="/">{link}</a>
            </li>
          ))}
        </ul>
        <a href="/">
          <span className="header-nav__cabinet">Войти в Интернет-банк</span>
        </a>
      </nav>
    </header>
  );
}
