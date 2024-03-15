import CallUs from '@/app/components/shared/CallUs'
import Materials from '@/app/components/shared/Materials';
import Plusses from '@/app/components/shared/Plusses';
import Steps from '@/app/components/shared/Steps'
import Image from 'next/image';
import React from 'react'

const Alcove = () => {
  return (
    <div className="alcove">
      <div className="alcove-head">
        <h1 className="h1-bold mb-28">Беседки</h1>
        <p className="h4-bold">
          Беседки из дерева в наличии и под заказ по вашим размерам
        </p>
      </div>
      <CallUs />
      <Steps />
      <div className="alcove-types">
        <h2 className="h2-bold mb-16">Доставка беседок любой сложности:</h2>
        <div className="alcove-type-card">
          <h3 className="h3-bold">От самых простых беседок</h3>
          <Image
            src="/assets/images/home-alcove.jpg"
            alt="swing"
            width={700}
            height={500}
            className=" mx-auto mt-10 rounded-lg"
          />
        </div>
        <div className="alcove-type-card">
          <h3 className="h3-bold mt-28">До необычных дизайнерских решений</h3>
          <Image
            src="/assets/images/alcove-2.jpg"
            alt="swing"
            width={700}
            height={500}
            className=" mx-auto mt-10 rounded-lg"
          />
        </div>
      </div>
      <Plusses />
      <Materials />
      <div className="home-bottom">Будем рады работе с вами!</div>
    </div>
  );
}

export default Alcove