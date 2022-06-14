import { useState } from 'react';
import Advantages from './advantages/advantages';
import Step1 from './calculator/step1';
import Step2 from './calculator/step2/step2';
import Footer from './footer/footer';
import Header from './header/header';
import Modal from './modal/modal';
import Slider from './slider/slider';

export default function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
      <Header setIsModalOpen={setIsModalOpen} />
      <main className="main">
        <h1 className="visually-hidden">Лига Банк, описание продуктов</h1>

        <Slider />
        <Advantages />

        <section className="main-calculator container">
          <h2>Кредитный калькулятор</h2>
          <div className="grid-layout">
            <div className="step1-step2">
              <Step1/>
              <Step2/>
            </div>
            <div className="proposal">
              <h3>Наше предложение</h3>
              <ul className="proposal-list">
                <li className="proposal-list__item">
                  <h3>1 330 000 рублей</h3>
                  <span>Сумма ипотеки</span>
                </li>
                <li className="proposal-list__item">
                  <h3>9,40%</h3>
                  <span>Процентная ставка</span>
                </li>
                <li className="proposal-list__item">
                  <h3>27 868 рублей</h3>
                  <span>Ежемесячный платеж</span>
                </li>
                <li className="proposal-list__item">
                  <h3>61 929 рублей</h3>
                  <span>Необходимый доход</span>
                </li>
              </ul>
              <button type="button" className="btn long-btn">
                Оформить заявку
              </button>
            </div>
          </div>

          <div className="step3">
            <h3>Шаг 3. Оформление заявки</h3>
            <ul className="step3-description__list">
              <li className="step3-description__item">
                <strong>Номер заявки</strong>
                <span>№ 0010</span>
              </li>
              <li className="step3-description__item">
                <strong>Цель кредита</strong>
                <span>Ипотека</span>
              </li>
              <li className="step3-description__item">
                <strong>Стоимость недвижимости</strong>
                <span>2 000 000 рублей</span>
              </li>
              <li className="step3-description__item">
                <strong>Первоначальный взнос</strong>
                <span>200 000 рублей</span>
              </li>
              <li className="step3-description__item">
                <strong>Срок кредитования</strong>
                <span>5 лет</span>
              </li>
            </ul>
            <form className="submit-form">
              <input
                className="submit-form__surname"
                id="input-surname"
                type="text"
                placeholder="ФИО"
              />
              <input
                className="submit-form__phone"
                id="input-phone"
                type="tel"
                placeholder="Телефон"
              />
              <input
                className="submit-form__mail"
                id="input-mail"
                type="mail"
                placeholder="E-mail"
              />
              <button className="submit-form__btn btn" type="submit">
                Отправить
              </button>
            </form>
          </div>
        </section>
        <section className="main-map container">
          <h2>Отделения Лига Банка</h2>
          <img alt="Карта с отделениями" src="./img/content/map.png" />
        </section>
      </main>
      <Footer />
    </>
  );
}
