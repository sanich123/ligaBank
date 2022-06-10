export default function Main() {

  return (
    <>
      <header>
        <a href="/">
          <img alt="Лига Банк лого" src="./img/svg/logo.svg" tabIndex={0} />
          <span className="header-logo">ЛИГА Банк</span>
        </a>
        <nav className="header-nav">
          <ul>
            <a href="/">
              <li>Услуги</li>
            </a>
            <a href="/">
              <li>Рассчитать кредит</li>
            </a>
            <a href="/">
              <li>Конвертер валют</li>
            </a>
            <a href="/">
              <li>Контакты</li>
            </a>
          </ul>
          <a href="/">
            <img alt="Личный кабинет" src="./img/svg/userCabinet.svg" />
            <span>Войти в Интернет-банк</span>
          </a>
        </nav>
      </header>
      <main className="main">
        <h1 className="visually-hidden">Лига Банк, описание продуктов</h1>
        <section className="main-slider">
          <ul>
            <li>
              <h2>Лига Банк</h2>
              <p>Кредиты на любой случай</p>
              <button type="button">Рассчитать кредит</button>
              <img alt="Black promo card" src="./img/content/black-card.png" />
              <img alt="White promo card" src="./img/content/white-card.png" />
            </li>
            <li>
              <h2>Лига Банк</h2>
              <p>Ваша уверенность в завтрашнем дне</p>
              <button type="button">Рассчитать кредит</button>
              <img alt="Promo man" src="./img/content/promo-man.png" />
            </li>
            <li>
              <h2>Лига Банк</h2>
              <p>Всегда рядом</p>
              <button type="button">Найти отделение</button>
              <img alt="Promo man" src="./img/content/promo-girl.png" />
            </li>
          </ul>
        </section>
        <section className="main-advantages">
          <h2 className="visually-hidden">Наши преимущества</h2>
          <ul>
            <li>
              <img alt="" src="./img/svg/deposites.svg" />
              <button type="button">Вклады</button>
              <h3>
                Вклады Лига Банка – это выгодная инвестиция в свое будущее
              </h3>
              <ul>
                <li>Проценты по вкладам до 7%</li>
                <li>Разнообразные условия</li>
                <li>
                  Возможность ежемесячной капитализации или вывод процентов на
                  банковскую карту
                </li>
              </ul>
              <button type="button">Узнать подробнее</button>
              <img
                alt="Промо картинка свинья с копилкой"
                src="./img/content/piggybank.png"
              />
            </li>
            <li>
              <img alt="" src="./img/svg/credites.svg" />
              <button type="button">Кредиты</button>
              <h3>Лига Банк выдает кредиты под любые цели</h3>
              <ul>
                <li>Ипотечный кредит</li>
                <li>Автокредит</li>
                <li>Потребительский кредит</li>
              </ul>
              <p>
                Рассчитайте ежемесячный платеж и ставку по кредиту
                воспользовавшись нашим <a href="/">кредитным калькулятором</a>
              </p>
              <img
                alt="Промо картинка кредит на машину"
                src="./img/content/car-credit.png"
              />
            </li>
            <li>
              <img alt="" src="./img/svg/security.svg" />
              <button type="button">Страхование</button>
              <h3>Лига Страхование — застрахуем все что захотите</h3>
              <ul>
                <li>Автомобильное страхование</li>
                <li>Страхование жизни и здоровья</li>
                <li>Страхование недвижимости</li>
              </ul>
              <button type="button">Узнать подробнее</button>
              <img
                alt="Промо картинка замок с сердечком"
                src="./img/content/secure-lock.png"
              />
            </li>
            <li>
              <img alt="" src="./img/svg/online.svg" />
              <button type="button">Онлайн-сервисы</button>
              <h3>
                Лига Банк — это огромное количество онлайн-сервисов для вашего
                удобства
              </h3>
              <ul>
                <li>Мобильный банк, который всегда под рукой</li>
                <li>
                  Приложение Лига-проездной позволит вам оплачивать билеты по
                  всему миру
                </li>
              </ul>
              <button type="button">Узнать подробнее</button>
              <img
                alt="Промо картинка замок с сердечком"
                src="./img/content/mobile.png"
              />
            </li>
          </ul>
        </section>
        <section className="main-calculator">
          <h2>Кредитный калькулятор</h2>
          <h3>Шаг 1. Цель кредита</h3>
          <select>
            <option value="Выберите цель кредита">Выберите цель кредита</option>
            <option value="Ипотечное кредитование">
              Ипотечное кредитование
            </option>
            <option value="Автомобильное кредитование">
              Автомобильное кредитование
            </option>
          </select>
          <h3>Шаг 2. Введите параметры кредита</h3>
          <form>
            <label>Стоимость недвижимости</label>
            <input type="number"></input>
            <span>От 1 200 000 до 25 000 000 рублей</span>
            <label>Первоначальный взнос</label>
            <input type="number"></input>
            <img alt="" src="./img/svg/blue-circle.svg" />
            <label>Срок кредитования</label>
            <input type="number"></input>
            <img alt="" src="./img/svg/blue-circle.svg" />
            <label>Использовать материнский капитал</label>
            <input type="checkbox"></input>
          </form>
          <div>
            <h3>Наше предложение</h3>
            <dl>
              <dt>Сумма ипотеки</dt>
              <dd>1 330 000 рублей </dd>
              <dt>Процентная ставка</dt>
              <dd>9,40%</dd>
              <dt>Ежемесячный платеж</dt>
              <dd>27 868 рублей</dd>
              <dt>Необходимый доход</dt>
              <dd>61 929 рублей</dd>
            </dl>
            <button type="button">Оформить заявку</button>
          </div>
          <div>
            <h3>Шаг 3. Оформление заявки</h3>
            <dl>
              <dt>Номер заявки</dt>
              <dd>№ 0010</dd>
              <dt>Цель кредита</dt>
              <dd>Ипотека</dd>
              <dt>Стоимость недвижимости</dt>
              <dd>2 000 000 рублей</dd>
              <dt>Первоначальный взнос</dt>
              <dd>200 000 рублей</dd>
              <dt>Срок кредитования</dt>
              <dd>5 лет</dd>
              <form>
                <input type="text" placeholder="ФИО" />
                <input type="tel" placeholder="Телефон" />
                <input type="mail" placeholder="E-mail" />
                <button type="submit">Отправить</button>
              </form>
            </dl>
          </div>
        </section>
        <section className="main-map">
          <h2>Отделения Лига Банка</h2>
          <img alt="Карта с отделениями" src="./img/content/map.png" />
        </section>
      </main>
      <footer>
        <a href="/">
          <img alt="Лига Банк лого" src="./img/svg/logo.svg" tabIndex={0} />
          <span className="header-logo">ЛИГА Банк</span>
        </a>
        <address>
          150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка
          России №1050 Ⓒ Лига Банк, 2019
        </address>
        <ul>
          <a href="/">
            <li>Услуги</li>
          </a>
          <a href="/">
            <li>Рассчитать кредит</li>
          </a>
          <a href="/">
            <li>Контакты</li>
          </a>
          <a href="/">
            <li>Задать вопрос</li>
          </a>
        </ul>
        <dl>
          <dt>*0904</dt>
          <dd>Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</dd>
          <dt>8 800 111 22 33</dt>
          <dd>Бесплатный для всех городов России</dd>
        </dl>
        <ul>
          <a href="http://facebook.com">
            <li>Facebook</li>
          </a>
          <a href="http://instagram.com">
            <li>Instagram</li>
          </a>
          <a href="http://twitter.com">
            <li>Twitter</li>
          </a>
          <a href="http://youtube.com">
            <li>Youtube</li>
          </a>
        </ul>
      </footer>
    </>
  );
}
