import CallUs from "@/app/components/shared/CallUs";
import Materials from "@/app/components/shared/Materials";
import Plusses from "@/app/components/shared/Plusses";
import Steps from "@/app/components/shared/Steps";
import Image from "next/image";
import React from "react";
import { Metadata } from "next";
import BottomHappy from "@/app/components/shared/BottomHappy";
import { AlcoveWork } from "@/app/components/constants";
import { IWorkProps } from "@/app/types";

const metadata: Metadata = {
  title: "Беседки",
};

export { metadata };

const Alcove = () => {
  return (
    <div className="alcove">
      <div className="alcove-head">
        <h1 className="h2-bold sm:h1-bold mt-12 sm:mt-0 mb-28">Беседки</h1>
        <p className="h4-bold">
          Беседки из дерева в наличии и под заказ по вашим размерам
        </p>
      </div>
      <CallUs />
      <Steps />
      <div className="alcove-types">
        <h2 className="h2-bold mb-16">Доставка беседок любой сложности:</h2>
        <div className="alcove-type-card">
          <h3 className="h3-bold">От простых до сложных беседок</h3>
          <Image
            src="/assets/images/alcove-2.jpeg"
            alt="swing"
            width={700}
            height={500}
            className="type-img"
          />
        </div>
      </div>
      <div className="alcove-work">
        <h2 className=" h2-bold">Одна из наших работ</h2>
        <ul className="work-cards">
          {AlcoveWork().map((work: IWorkProps) => {
            return (
              <li key={work.imgURL} className="work-card">
                <Image
                  src={work.imgURL}
                  alt="image"
                  height={200}
                  width={200}
                  className="rounded-lg"
                />
              </li>
            );
          })}
        </ul>
      </div>
      <Plusses />
      <Materials />
      <BottomHappy />
    </div>
  );
};

export default Alcove;
