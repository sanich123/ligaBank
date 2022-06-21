import { navLinks } from '../../utils/const';

export default function Header({setIsModalOpen}: {setIsModalOpen: (arg: boolean) => void}) {
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
        <button aria-label="Войти в интернет-банк" onClick={() => setIsModalOpen(true)}>
          <span className="header-nav__cabinet">Войти в Интернет-банк</span>
        </button>
      </nav>
    </header>
  );
}
