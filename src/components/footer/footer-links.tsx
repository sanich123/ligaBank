import { footerNavLinks } from '../../utils/const';

export default function FooterLinks() {
  return (
    <ul className="footer__links">
      {footerNavLinks.map((link) => (
        <li key={link} className="footer__links--item">
          <a href="/">{link}</a>
        </li>))}
    </ul>);
}
