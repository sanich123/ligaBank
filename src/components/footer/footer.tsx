import { footerNavLinks, socialLinks } from '../../utils/const';

export default function Footer() {
  return (
    <div className="wrapper">
      <footer className="footer container">
        <div className="footer-logo">
          <a href="/">
            <span className="header-nav__logo">ЛИГА Банк</span>
          </a>
          <address>
            150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка
            России №1050 Ⓒ Лига Банк, 2019
          </address>
        </div>
        <ul className="footer-links">
          {footerNavLinks.map((link) => (
            <li key={link} className="footer-links__item">
              <a href="/">{link}</a>
            </li>
          ))}
        </ul>
        <div className="footer-sms">
          <a href="tel:*0904">*0904</a>
          <br />
          <p>Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
        </div>
        <div className="footer-phone">
          <a href="tel: 800 111 22 33"> 800 111 22 33</a>
          <br />
          <p>Бесплатный для всех городов России</p>
        </div>
        <ul className="footer-social">
          {Object.entries(socialLinks).map(([network, address]) => (
            <li key={network} className={`footer-social__item ${network}`}>
              <a href={address}>
                <span className="visually-hidden">{network}</span>
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
