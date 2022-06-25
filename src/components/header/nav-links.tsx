import { navLinks } from '../../utils/const';

export default function NavLinks() {
  return (
    <ul className="header-nav__menu">
      {navLinks.map((link) => (
        <li key={link} className="header-nav__menu-item">
          <a href="/" aria-labelledby="Навигационная ссылка">
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
}
