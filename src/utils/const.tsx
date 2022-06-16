import { Credits, Deposites, Insurance, Online } from '../components/svg';
export const MAX_MORTGAGE_PRICE = 25000000;
export const MIN_MORTGAGE_PRICE = 1200000;
export const MIN_CARCREDIT_PRICE = 500000;
export const MAX_CARCREDIT_PRICE = 2000000;
export const STEP_MORTGAGE_PRICE = 100000;
export const STEP_CARCREDIT_PRICE = 50000;
export const MATERNITY_CAPITAL = 470000;
export const MIN_MORTGAGE_SUM = 500000;
export const MIN_CARCREDIT_SUM = 200000;
export const MIN_MORTGAGE_PERCENT = 8.50;
export const MAX_MORTGAGE_PERCENT = 9.40;
export const INITIAL_MORTGAGE_TIME = '5';
export const INITIAL_CARCREDIT_TIME = '1';

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

export const purposesOfCredit = {
  mortgage: 'Ипотечное кредитование',
  carCredit: 'Автомобильное кредитование',
  notSelected: 'Выберите цель кредита',
};
