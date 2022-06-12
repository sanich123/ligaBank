import Advantages from './advantages/advantages';
import Footer from './footer/footer';
import Header from './header/header';
import Slider from './slider/slider';


export default function Main() {

  return (
    <>
      <Header/>
      <main className="main">
        <h1 className="visually-hidden">Лига Банк, описание продуктов</h1>

        <Slider/>
        <Advantages />
        <section className="main-calculator container">
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
        <section className="main-map container">
          <h2>Отделения Лига Банка</h2>
          <img alt="Карта с отделениями" src="./img/content/map.png" />
        </section>
      </main>
      <Footer/>
    </>
  );
}
