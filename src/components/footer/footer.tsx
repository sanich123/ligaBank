import { footerNavLinks, socialLinks } from '../../utils/const';
import { Logo, Phone, SmallPhone } from '../svgs';
import './footer-styles.css';

export default function Footer() {
  return (
    <div className="wrapper">
      <footer className="footer container">
        <div className="footer__logo">
          <a
            aria-labelledby="Ссылка на главную страницу, логотип"
            className="header-nav__logo"
            href="/"
          >
            <Logo />
            ЛИГА Банк
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
        <div className="footer__sms">
          <a href="tel:*0904">
            <span className="footer__sms-svg">
              <SmallPhone />
            </span>
            <span className="footer__sms-text">*0904</span>
          </a>

          <p>
            Бесплатно для абонентов
            <br /> МТС, Билайн, Мегафон, Теле2
          </p>
        </div>
        <div className="footer__phone">
          <a href="tel: 800 111 22 33">
            <span className="footer__phone-svg">
              <Phone />
            </span>
            <span className="footer__phone-text">8 800 111 22 33</span>
          </a>
          <p>Бесплатный для всех городов России</p>
        </div>
        <ul className="footer-social">
          {Object.entries(socialLinks).map(([network, {address, icon}]) => (
            <li key={network} className="footer-social__item">
              <a href={address} aria-label={`Ссылка на социальную сеть ${network}`}>
                {icon}
              </a>
            </li>))}
        </ul>
      </footer>
    </div>
  );
}
