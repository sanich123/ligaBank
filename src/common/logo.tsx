import { LogoIcon } from '../components/icons';

export default function Logo() {
  return (
    <a
      aria-labelledby="Ссылка на главную страницу, логотип"
      className="header-nav__logo"
      href="/"
    >
      <LogoIcon />
      ЛИГА Банк
    </a>
  );
}
