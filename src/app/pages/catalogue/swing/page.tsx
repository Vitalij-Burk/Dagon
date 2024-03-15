import CallUs from "@/app/components/shared/CallUs";
import Materials from "@/app/components/shared/Materials";
import Plusses from "@/app/components/shared/Plusses";
import Steps from "@/app/components/shared/Steps";
import Image from "next/image";
import React from "react";

const Swing = () => {
  return (
    <div className="swing">
      <div className="swing-head">
        <h1 className="h1-bold">Качели</h1>
        <p className="h4-bold mt-24">Качели из дерева в наличии и под заказ</p>
      </div>
      <CallUs />
      <Steps />
      <div className="swing-types">
        <h2 className="h2-bold mb-16">Доставка качелей любой сложности:</h2>
        <div className="swing-type-card">
          <h3 className="h3-bold">
            От самых простых качелей на даче, до качелей на участках особняков
          </h3>
          <Image
            src="/assets/images/swing-1.jpg"
            alt="swing"
            width={800}
            height={535}
            className=" mx-auto mt-10 rounded-lg"
          />
        </div>
      </div>
      <Plusses />
      <Materials />
      <div className="home-bottom">Будем рады работе с вами!</div>
    </div>
  );
};

export default Swing;
