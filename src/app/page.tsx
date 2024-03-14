import Image from "next/image";
import { Plusses, homeWorksImg, stepImg } from "./components/constants";
import { IHomeWorksImgProps, IPlussesProps, IStepImgProps } from "./types";

export default function Home() {
  return (
    <div className="home">
      <div className="home-main">
        <div className="home-main-text">
          <h1 className="h1-bold">TopAdvance</h1>
          <p className="h4-bold mt-20">
            Мы изготавливаем дрова, пиломатериалы, беседки и качели под заказ
          </p>
          <p className="h4-bold mt-10">
            Если вы давно хотели купить что-нибудь, чтобы украсить свой участок
            или если вы хотите купить пиломатериалы для постройки, то
            обращайтесь к нам
          </p>
        </div>
      </div>
      <div className="home-phone-number">
        <h2 className="h2-bold">Звоните нам:</h2>
        <h1 className="h1-bold mt-6">+4594894713</h1>
      </div>
      <div className="our-works">
        <h2 className="h2-bold">Наши работы:</h2>
        <ul className="our-works-cards">
          {homeWorksImg().map((image: IHomeWorksImgProps) => {
            return (
              <li key={image.label} className="our-works-card">
                <Image
                  src={image.imgURL}
                  alt="image"
                  width={250}
                  height={200}
                  className="rounded-lg"
                />
                <p className="mt-4 body-bold">{image.label}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="steps">
        <h2 className="h2-bold">Как происходит работа:</h2>
        <ul className="steps-cards">
          {stepImg().map((step: IStepImgProps) => {
            return (
              <li key={step.label} className="step-card">
                <p className="body-bold">{step.id}</p>
                <Image
                  src={step.imgURL}
                  alt="step"
                  width={100}
                  height={100}
                  className="ml-12 my-4"
                />
                <p className="body-bold mb-4">{step.label}</p>
                <p>{step.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="plusses">
        <h2 className="h2-bold">Плюсы выбрать нас:</h2>
        <ul className="plusses-cards">
          {Plusses().map((plus: IPlussesProps) => {
            return (
              <li key={plus.label} className="plus-card">
                <Image
                  src={plus.imgURL}
                  alt="plus"
                  width={100}
                  height={100}
                  className=" ml-4 mb-4"
                />
                <p className="body-bold">{plus.label}</p>
              </li>
            );
          })}
        </ul>
        <h2 className="h2-bold text-orange-300 mt-16">
          99% довольных клиентов. Станьте одним из них!
        </h2>
      </div>
      <div className="home-bottom">Будем рады работе с вами!</div>
    </div>
  );
}
