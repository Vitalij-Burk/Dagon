import { LumberKindCard } from "@/app/components/constants";
import CallUs from "@/app/components/shared/CallUs";
import Plusses from "@/app/components/shared/Plusses";
import Steps from "@/app/components/shared/Steps";
import Trees from "@/app/components/shared/Trees";
import { ILumberKindsProps } from "@/app/types";
import Image from "next/image";
import React from "react";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Пиломатериалы",
};

export { metadata }

const Lumber = () => {
  return (
    <div className="lumber">
      <div className="lumber-head">
        <h1 className="h2-bold mt-10 sm:mt-0 sm:h1-bold">Пиломатериалы</h1>
        <p className="h4-bold mt-24">Нужны пиломатериалы? Вам нужно к нам</p>
      </div>
      <CallUs />
      <Steps />
      <div className="lumber-kinds">
        <h2 className="h2-bold">Пиломатериалы, которые мы изготавливаем</h2>
        <ul className="lumber-kinds-cards">
          {LumberKindCard().map((card: ILumberKindsProps) => {
            return (
              <li key={card.label} className="lumber-kinds-card">
                <Image
                  src={card.imgURL}
                  alt={card.label}
                  width={200}
                  height={150}
                  className="rounded-lg"
                />
                <p className="mt-3 body-medium">{card.label}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <Plusses />
      <Trees />
      <div className="home-bottom">Будем рады работе с вами!T</div>
    </div>
  );
};

export default Lumber;
