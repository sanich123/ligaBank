import { useState } from 'react';
import Advantages from './advantages/advantages';
import Footer from './footer/footer';
import Header from './header/header';
import Modal from './modal/modal';
import Slider from './slider/slider';
import Calculator from './calculator/calculator';
import Map from './map/map';

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

        <section className="calculator container">
          <h2>Кредитный калькулятор</h2>
          <Calculator />
        </section>
        <Map />
      </main>
      <Footer />
    </>
  );
}
