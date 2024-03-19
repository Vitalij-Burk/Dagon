import { SlideWork } from "@/app/components/constants";
import BottomHappy from "@/app/components/shared/BottomHappy";
import CallUs from "@/app/components/shared/CallUs";
import Materials from "@/app/components/shared/Materials";
import Plusses from "@/app/components/shared/Plusses";
import Steps from "@/app/components/shared/Steps";
import { IWorkProps } from "@/app/types";
import { Metadata } from "next";
import Image from "next/image";

const metadata: Metadata = {
  title: "Горки",
};

export { metadata };

const Slide = () => {
  return (
    <div className="slide">
      <div className="slide-head">
        <h1 className="h2-bold sm:h1-bold mt-12 sm:mt-0 mb-28">Горки</h1>
        <p className="h4-bold">
          Горки из дерева в наличии и под заказ по вашим размерам
        </p>
      </div>
      <CallUs />
      <Steps />
      <div className="slide-types">
        <h2 className="h2-bold mb-16">Доставка горок любой сложности:</h2>
        <div className="slide-type-card">
          <h3 className="h3-bold">Сделаем для вас детские гороки любой сложности</h3>
          <Image
            src="/assets/images/slide-2.jpeg"
            alt="slide"
            width={700}
            height={500}
            className="type-img"
          />
        </div>
      </div>
      <div className="slide-work">
        <h2 className=" h2-bold">Одна из наших работ</h2>
        <ul className="work-cards-4">
          {SlideWork().map((work: IWorkProps) => {
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

export default Slide;
