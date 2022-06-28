import { socialLinks } from '../../utils/const';

export default function FooterSocial() {
  return (
    <ul className="footer__social">
      {Object.entries(socialLinks).map(([network, { address, icon }]) => (
        <li key={network}>
          <a href={address} aria-label={`Ссылка на социальную сеть ${network}`}>
            {icon}
          </a>
        </li>))}
    </ul>
  );
}
