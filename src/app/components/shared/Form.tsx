import React, { useState } from 'react';

const Form = () => {
  return (
    <div className='form-wrapper'>
      <form
        action='https://formspree.io/f/xvoevpaw'
        method='POST'
        encType='multipart/form-data'
      >
        <div className='form-inner'>
          <h2 className='h2-bold mb-10'>Оставьте заявку:</h2>
          <input
            className='form-input'
            type='text'
            name='Имя'
            placeholder='Имя'
          />
          <input
            className='form-input'
            type='text'
            name='Фамилия'
            placeholder='Фамилия'
          />
          <input
            className='form-input'
            type='email'
            name='Email'
            placeholder='Email'
          />
          <textarea
            className='form-input resize-none'
            rows={5}
            name='Сообщение'
            placeholder='Сообщение'
          ></textarea>
          <button className='form-button' type='submit'>
            Отправить
          </button>
        </div>
      </form>
      <a href='mailto:rek.goncharenko@gmail.com'>
        <p className='body-bold mt-8'>Присылайте фото нам на email</p>
      </a>
    </div>
  );
};

export default Form;
