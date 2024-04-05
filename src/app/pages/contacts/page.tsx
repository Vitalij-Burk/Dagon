import React from 'react';
import { Metadata } from 'next';
import BottomHappy from '@/app/components/shared/BottomHappy';
import Image from 'next/image';
import {
  SocialImages,
  phoneNumber,
  publicPhoneNumber,
  whatsappAddress,
} from '@/app/components/constants';
import Link from 'next/link';
import { ISocialProps } from '@/app/types';

const metadata: Metadata = {
  title: 'Контакты',
};

export { metadata };

const Catalogue = () => {
  return (
    <div className='contacts'>
      <h1 className='text-orange-300 h2-bold sm:h1-bold mb-20'>
        Свяжитесь с нами
      </h1>
      <div className='contact-data'>
        <div className='contact-number'>
          <h2 className='contact-title'>Наш номер:</h2>
          <a href={`tel:${phoneNumber}`}>
            <p className='contact-text'>{publicPhoneNumber}</p>
          </a>
          <div className='footer-call-us'>
            <h4 className=' contact-title'>А также написать:</h4>
            <ul className='contact-socials'>
              {SocialImages().map((social: ISocialProps) => {
                return (
                  <Link href={social.route}>
                    <li className='contact-social'>
                      <Image
                        src={social.imgURL}
                        alt='image'
                        height={70}
                        width={70}
                      />
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
        <div className='contact-lawyer-address'>
          <h2 className='contact-title'>Наш юридический адрес:</h2>
          <h3 className='contact-text'>
            247768, Гомельская обл., Мозырский р-н., д.Прудок, ул.Колхозная, д.
            63
          </h3>
        </div>
        <div className='contact-address'>
          <h2 className='contact-title'>Наши адреса:</h2>
          <h3 className='contact-text'>
            Беларусь, Мозырь, Советская — Торговый павильон
          </h3>
          <h3 className='contact-text'>Беларусь, Мозырь — Д. Прудок</h3>
        </div>
        <div className='contact-time'>
          <h2 className='contact-title'>Режим работы:</h2>
          <h3 className='contact-text'>7:00 - 17:00, ПН - ПТ</h3>
        </div>
      </div>
      <BottomHappy />
    </div>
  );
};

export default Catalogue;
