import Image from "next/image";
import { homeWorksImg } from "./components/constants";
import { IHomeWorksImgProps } from "./types";
import Link from "next/link";
import CallUs from "./components/shared/CallUs";
import Steps from "./components/shared/Steps";
import Plusses from "./components/shared/Plusses";

export default function Home() {
  return (
    <div className="home">
      <div className="home-main">
        <div className="home-main-text">
          <h1 className="h2-bold mt-20 sm:mt-0 sm:h1-bold">
            Фермерское хозяйство "Дагон"
          </h1>
          <p className="h4-bold mt-20">
            Дрова, пиломатериалы, беседки, качели и бани под заказ и в наличии
          </p>
          <p className="h4-bold mt-10">
            Если вы давно хотели купить что-нибудь, чтобы украсить свой участок
            или если вы хотите купить пиломатериалы для постройки, то
            обращайтесь к нам
          </p>
        </div>
      </div>
      <CallUs />
      <div className="our-works">
        <h2 className="h2-bold">Наши работы:</h2>
        <ul className="our-works-cards">
          {homeWorksImg().map((image: IHomeWorksImgProps) => {
            return (
              <Link href={image.route}>
                <li key={image.label} className="our-works-card">
                  <Image
                    src={image.imgURL}
                    alt={image.label}
                    width={250}
                    height={200}
                    className="rounded-lg"
                  />
                  <p className="mt-4 body-bold">{image.label}</p>
                </li>
              </Link>
            );
          })}
        </ul>
        <p className="body-bold mt-10 mx-2 md:mx-48">
          Мы на рынке уже более 15 лет. За это время у нас уже много довольных
          клиентов, которые всегда хотят чего-то нового. Мы можем с уверенностью
          сказать:
        </p>
        <h3 className="h3-bold mt-16 text-orange-300">
          Для нас главное качество!
        </h3>
      </div>
      <Steps />
      <div className="plusses">
        <Plusses />
        <h2 className="h2-bold text-orange-300 mt-16">
          99% довольных клиентов. Станьте одним из них!
        </h2>
      </div>
      <div className="better">
        <h2 className="mb-16 h2-bold">Мы во всём лучше конкурентов</h2>
        <div className="better-card">
          <h3 className="better-type">Наша работа</h3>
          <Image
            src="/assets/images/swing-3.jpeg"
            alt="swing"
            width={800}
            height={535}
            className="mx-auto rounded-lg"
          />
          <p className="better-price">25000</p>
        </div>
        <div className="better-card">
          <h3 className="better-type">Работа конкурентов</h3>
          <Image
            src="/assets/images/swing-concurent.jpeg"
            alt="swing"
            width={400}
            height={335}
            className="mx-auto rounded-lg"
          />
          <p className="better-price">25000</p>
        </div>
      </div>
      <div className="to-catalogue">
        <Link href="/pages/catalogue">
          <button className="to-catalogue-btn">Переходите в каталог</button>
        </Link>
      </div>
      <div className="home-bottom">Будем рады работе с вами!</div>
    </div>
  );
}
