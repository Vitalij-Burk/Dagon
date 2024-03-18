import { IPlussesProps } from '@/app/types';
import { PlussesCard } from "../constants";
import Image from 'next/image';
import React from 'react'

const Plusses = () => {
  return (
    <div className="plusses">
      <h2 className="h2-bold">Плюсы выбрать нас:</h2>
      <ul className="plusses-cards">
        {PlussesCard().map((plus: IPlussesProps) => {
          return (
            <li key={plus.label} className="plus-card">
              <Image
                src={plus.imgURL}
                alt={plus.label}
                width={100}
                height={100}
                className=" ml-4 mb-4"
              />
              <p className="body-bold">{plus.label}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Plusses