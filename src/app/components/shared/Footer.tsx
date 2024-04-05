import React from 'react';
import {
  SocialImages,
  phoneNumber,
  publicPhoneNumber,
  whatsappAddress,
} from '../constants';
import Image from 'next/image';
import Form from './Form';
import { ISocialProps } from '@/app/types';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <Form />
        <iframe
          src='https://yandex.ru/map-widget/v1/?um=constructor%3A8daebbf8e28f153c1825c26af164cfbca26f981904467a1b867ac5b02076087d&amp;source=constructor'
          className=' h-96 mr-10 rounded-xl w-full'
          style={{ border: '0' }}
          allowFullScreen={true}
          loading='lazy'
        ></iframe>
        <div className='container'>
          <div className='footer-lawyer-address'>
            <h2 className='footer-title'>Наш юридический адрес:</h2>
            <h3 className='footer-text'>
              247768, Гомельская обл., Мозырский р-н., д.Прудок, ул.Колхозная,
              д. 63
            </h3>
          </div>
          <div className='footer-address'>
            <h2 className='footer-title'>Наши адреса:</h2>
            <h3 className='footer-text'>
              Беларусь, Мозырь, Советская — Торговый павильон
            </h3>
            <h3 className='footer-text'>Беларусь, Мозырь — Д. Прудок</h3>
          </div>
          <div className='footer-call-us'>
            <h4 className=' body-bold'>Вы всегда можете позвонить нам:</h4>
            <a href={`tel:${phoneNumber}`}>{publicPhoneNumber}</a>
          </div>
          <div className='footer-call-us'>
            <h4 className=' body-bold'>А также написать:</h4>
            <ul className='footer-socials'>
              {SocialImages().map((social: ISocialProps) => {
                return (
                  <Link href={social.route}>
                    <li className='footer-social'>
                      <Image
                        src={social.imgURL}
                        alt='image'
                        height={20}
                        width={20}
                      />
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className='footer-call-us'>
            <h4 className=' body-bold'>Наша почта</h4>
            <a href='mailto:rek.goncharenko@gmail.com'>
              rek.goncharenko@gmail.com
            </a>
          </div>
          <div className='footer-operating-mode'>
            <h4 className='body-bold'>Наш режим работы:</h4>
            <p>7:00 - 17:00, ПН - ПТ</p>
          </div>
        </div>
      </div>

      <div className='footer-copyright'>
        <p>Фермерское хозяйство "Дагон"</p>
      </div>
    </footer>
  );
};

export default Footer;
