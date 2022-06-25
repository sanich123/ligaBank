import { phoneNumber } from '../../utils/const';
import { Phone } from '../icons';

export default function FooterPhone() {
  return (
    <div className="footer__phone">
      <a href={`tel:${phoneNumber.phone}`}>
        <span className="footer__phone-svg">
          <Phone />
        </span>
        <span className="footer__phone-text">{phoneNumber.phone}</span>
      </a>
      <p>Бесплатный для всех городов России</p>
    </div>
  );
}
