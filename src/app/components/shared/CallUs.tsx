import React from 'react';
import { phoneNumber, publicPhoneNumber, whatsappAddress } from '../constants';
import Image from 'next/image';

const CallUs = () => {
  return (
    <div className='call-us'>
      <h2 className='h3-bold sm:h2-bold'>Звоните нам:</h2>
      <a href={`tel:${phoneNumber}`} className='h2-bold sm:h1-bold mt-8 mb-6'>
        {publicPhoneNumber}
      </a>
      <h2 className='h3-bold sm:h2-bold mt-8'>И пишите в WhatsApp:</h2>
      <a href={whatsappAddress}>
        <Image
          src='/assets/icons/whatsapp.png'
          alt='whatsapp'
          width={100}
          height={100}
          className='mx-auto mt-6'
        />
      </a>
    </div>
  );
};

export default CallUs;
