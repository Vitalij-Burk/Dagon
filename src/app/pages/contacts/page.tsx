import React from "react";

const Catalogue = () => {
  return (
    <div className="contacts">
      <h1 className="text-orange-300 h1-bold mb-20">Свяжитесь с нами</h1>
      <div className="contact-data">
        <div className="contact-number">
          <h2 className="contact-title">Наш номер:</h2>
          <h3 className="contact-text">+452498071934</h3>
        </div>
        <div className="contact-address">
          <h2 className="contact-title">Наш адрес:</h2>
          <h3 className="contact-text">Минск,Беларусь ул.Ленина 142б</h3>
        </div>
        <div className="contact-time">
          <h2 className="contact-title">Режим работы:</h2>
          <h3 className="contact-text">7:00 - 17:00, ПН - ПТ</h3>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
