import { CreditsIcon, DepositesIcon, FacebookIcon, InstagramIcon, InsuranceIcon, OnlineIcon, TwitterIcon, YoutubeIcon } from '../components/icons';

export const MAX_MORTGAGE_PRICE = 25000000;
export const MIN_MORTGAGE_PRICE = 1200000;
export const MIN_CARCREDIT_PRICE = 500000;
export const MEDIUM_CARCREDIT_PRICE = 2000000;
export const MAX_CARCREDIT_PRICE = 5000000;
export const STEP_MORTGAGE_PRICE = 100000;
export const STEP_CARCREDIT_PRICE = 50000;
export const MATERNITY_CAPITAL = 470000;
export const MIN_MORTGAGE_SUM = 500000;
export const MIN_CARCREDIT_SUM = 200000;
export const MIN_MORTGAGE_PERCENT = 8.50;
export const MAX_MORTGAGE_PERCENT = 9.40;
export const SMALLEST_CARCREDIT_PERCENT = 3.5;
export const SMALL_CARCREDIT_PERCENT = 8.5;
export const MEDIUM_CARCREDIT_PERCENT = 15;
export const MAX_CARCREDIT_PERCENT = 16;
export const MIN_MORTGAGE_TIME = 5;
export const MAX_MORTGAGE_TIME = 30;
export const MIN_CARCREDIT_TIME = 1;
export const MAX_CARCREDIT_TIME = 5;
export const MIN_MORTGAGE_RANGE = 10;
export const MIN_CARCREDIT_RANGE = 20;
export const MIN_RANGE_CARCREDIT = 0.2;
export const MIN_RANGE_MORTGAGE = 0.1;

export const FIRST_SLIDE = 0;
export const SECOND_SLIDE = 1;
export const LAST_SLIDE = 2;
export const SLIDER_DELAY = 4000;

export const localRus = 'ru-Ru';

export const advantagesTypes = {
  deposites: 'Вклады',
  credits: 'Кредиты',
  insurance: 'Страхование',
  online: 'Онлайн-сервисы',
};

export const advantagesBtns = {
  'Вклады': <DepositesIcon/>,
  'Кредиты': <CreditsIcon/>,
  'Страхование': <InsuranceIcon/>,
  'Онлайн-сервисы': <OnlineIcon/>,
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

export const advantagesInsurances = [
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
  facebook: {
    address: 'http://facebook.com',
    icon: <FacebookIcon/>,
  },
  instagram: {
    address: 'http://instagram.com',
    icon: <InstagramIcon/>,
  },
  twitter: {
    address: 'http://twitter.com',
    icon: <TwitterIcon/>,
  },
  youtube: {
    address: 'http://youtube.com',
    icon: <YoutubeIcon/>,
  },
};

export const sliderTabs = [
  'Слайд Кредиты', 'Слайд Уверенность', 'Слайд Всегда рядом',
];

export const purposesOfCredit = {
  notSelected: 'Выберите цель кредита',
  mortgage: 'Ипотечное кредитование',
  carCredit: 'Автомобильное кредитование',
};

export const storageKeys = {
  loginPassword: 'loginPassword',
  application: 'application',
};

export const inputPatterns = {
  password: '(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}',
  phone: '(+?d[- .]*){7,13}',
  email: '[^@]+@[^@]+.[a-zA-Z]{2,6}',
};

export const inputTitles = {
  password:
    'Не менее восьми символов, содержащих хотя бы одну цифру и символы из верхнего и нижнего регистра',
  phone: 'Международный, государственный или местный телефонный номер',
  email: 'Введите валидный email адрес',
};

export const slidersNumbers = ['first','second','third'];

export const phoneNumber = {
  sms: '*0904',
  phone: '8 800 111 22 33',
} as const;

export const footerText = {
  address: '150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка России №1050 Ⓒ Лига Банк, 2019',
};
