import Logo from '../../common/logo';
import { footerText } from '../../utils/const';
import FooterLinks from './footer-links';
import FooterPhone from './footer-phone';
import FooterSms from './footer-sms';
import FooterSocial from './footer-social';
import './footer-styles.css';

export default function Footer() {

  return (
    <div className="wrapper">
      <footer className="footer container">
        <div className="footer__logo">
          <Logo/>
          <address>
            {footerText.address}
          </address>
        </div>
        <FooterLinks/>
        <FooterSms/>
        <FooterPhone/>
        <FooterSocial/>
      </footer>
    </div>
  );
}
