import CallUs from "@/app/components/shared/CallUs";
import Materials from "@/app/components/shared/Materials";
import Plusses from "@/app/components/shared/Plusses";
import Steps from "@/app/components/shared/Steps";
import Image from "next/image";
import React from "react";
import { Metadata } from "next";
import { SwingWork } from "@/app/components/constants";
import { IWorkProps } from "@/app/types";

export const matadata: Metadata = {
  title: "Качели",
};

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
            src="/assets/images/swing-5.jpeg"
            alt="swing"
            width={800}
            height={535}
            className=" mx-auto mt-10 rounded-lg"
          />
        </div>
      </div>
      <div className="swing-work">
        <h2 className="h2-bold">Одна из наших работ</h2>
        <ul className="work-cards">
          {SwingWork().map((work: IWorkProps) => {
            return (
              <li key={work.imgURL} className="work-card">
                <Image src={work.imgURL} alt="work" width={200} height={200} className="rounded-lg" />
              </li>
            )
          })}
        </ul>
      </div>
      <Plusses />
      <Materials />
      <div className="home-bottom">Будем рады работе с вами!</div>
    </div>
  );
};

export default Swing;
