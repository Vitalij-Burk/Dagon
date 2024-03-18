import CallUs from '@/app/components/shared/CallUs';
import Materials from '@/app/components/shared/Materials';
import Plusses from '@/app/components/shared/Plusses';
import Steps from '@/app/components/shared/Steps';
import Image from 'next/image';
import React from 'react'
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Бани",
};

export { metadata }

const Baths = () => {
  return (
    <div className="baths">
      <div className="baths-head">
        <h1 className="h1-bold">Бани</h1>
        <p className="h4-bold mt-24">
          Бани бочки и квадро бани в наличии и под заказ с доставкой
        </p>
      </div>
      <CallUs />
      <Steps />
      <div className="baths-kinds">
        <h2 className="h2-bold">Виды бань в продаже</h2>
        <ul className="baths-kinds-cards">
          <li className="baths-kinds-card">
            <p className="body-bold mb-4">Бани бочки</p>
            <Image
              src="/assets/images/bath-bochka.jpg"
              alt="kind"
              width={300}
              height={300}
              className=" rounded-lg"
            />
          </li>
          <li className="baths-kinds-card">
            <p className="body-bold mb-4">Квадро бани</p>
            <Image
              src="/assets/images/bath-quadro.jpg"
              alt="kind"
              width={300}
              height={300}
              className=" rounded-lg"
            />
          </li>
        </ul>
      </div>
      <Plusses />
      <Materials />
      <div className="home-bottom">Будем рады работе с вами!</div>
    </div>
  );
}

export default Baths