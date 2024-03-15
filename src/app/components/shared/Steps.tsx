import { IStepImgProps } from '@/app/types';
import React from 'react'
import { stepImg } from '../constants';
import Image from 'next/image';

const Steps = () => {
  return (
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
  );
}

export default Steps