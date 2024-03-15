import CallUs from "@/app/components/shared/CallUs";
import Plusses from "@/app/components/shared/Plusses";
import Steps from "@/app/components/shared/Steps";
import Trees from "@/app/components/shared/Trees";
import Image from "next/image";
import React from "react";

const Firewood = () => {
  return (
    <div className="firewood">
      <div className="firewood-head">
        <h1 className="h1-bold">Дрова</h1>
        <p className="h4-bold mt-24">
          Дрова хвойных и лиственных пород. Доставка по Мозырскому и
          Калинковическому районам
        </p>
      </div>
      <CallUs />
      <Steps />
      <div className="firewood-kinds">
        <h2 className="h2-bold">Мы продаём дрова</h2>
        <ul className="firewood-kinds-cards">
          <li className="firewood-kinds-card">
            <p className="body-bold mb-4">Колотые</p>
            <Image
              src="/assets/images/firewood-listvenitsa.jpg"
              alt="kind"
              width={300}
              height={300}
              className=" rounded-lg"
            />
          </li>
          <li className="firewood-kinds-card">
            <p className="body-bold mb-4">Круглые</p>
            <Image
              src="/assets/images/firewood-olha.jpg"
              alt="kind"
              width={300}
              height={300}
              className=" rounded-lg"
            />
          </li>
        </ul>
      </div>
      <Plusses />
      <Trees />
      <div className="home-bottom">Будем рады работе с вами!</div>
    </div>
  );
};

export default Firewood;
