import { Credits, Deposites, Insurance, Online } from '../components/svg';
export const MAX_PRICE = 25000000;
export const MIN_PRICE = 1200000;
export const STEP_PRICE = 100000;
export const advantagesTypes = {
  deposites: 'Вклады',
  credits: 'Кредиты',
  insurance: 'Страхование',
  online: 'Онлайн-сервисы',
};

export const advantagesBtns = {
  'Вклады': <Deposites/>,
  'Кредиты': <Credits/>,
  'Страхование': <Insurance/>,
  'Онлайн-сервисы': <Online/>,
};

export const advantagesDeposites = [
  'Проценты по вкладам до 7%',
  'Разнообразные условия',
  'Возможность ежемесячной капитализации или вывод процентов на банковскую карту',
];

export const advantagesCredits = [
  'Ипотечный кредит',
  'Автокредит',
  'Потребительский кредит',
];

export const advantageInsurances = [
  'Автомобильное страхование',
  'Страхование жизни и здоровья',
  'Страхование недвижимости',
];

export const advantagesOnline = [
  'Мобильный банк, который всегда под рукой',
  'Приложение Лига-проездной позволит вам оплачивать билеты по всему миру',
];

export const navLinks = [
  'Услуги',
  'Рассчитать кредит',
  'Конвертер валют',
  'Контакты',
];

export const footerNavLinks = [
  'Услуги',
  'Рассчитать кредит',
  'Контакты',
  'Задать вопрос',
];

export const socialLinks = {
  facebook: 'http://facebook.com',
  instagram: 'http://instagram.com',
  twitter: 'http://twitter.com',
  youtube: 'http://youtube.com',
};

export const sliderTabs = [
  'Кредиты', 'Уверенность', 'Всегда рядом',
];
