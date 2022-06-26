import { phoneNumber } from '../../utils/const';
import { SmallPhoneIcon } from '../icons';

export default function FooterSms() {
  return (
    <div className="footer__sms">
      <a href={`tel:${phoneNumber.sms}`}>
        <span className="footer__sms-svg">
          <SmallPhoneIcon />
        </span>
        <span className="footer__sms-text">{phoneNumber.sms}</span>
      </a>
      <p>
        Бесплатно для абонентов
        <br /> МТС, Билайн, Мегафон, Теле2
      </p>
    </div>
  );
}
