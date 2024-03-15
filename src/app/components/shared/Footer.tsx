import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-lawyer-address">
            <h2 className="footer-title">Наш юридический адрес:</h2>
            <h3 className="footer-text">
              247768, Гомельская обл., Мозырский р-н., д.Прудок, ул.Колхозная,
              д. 63
            </h3>
          </div>
          <div className="footer-address">
            <h2 className="footer-title">Наши адреса:</h2>
            <h3 className="footer-text">
              Беларусь, Мозырь, Советская — Торговый павильон
            </h3>
            <h3 className="footer-text">Беларусь, Мозырь — Д. Прудок</h3>
          </div>
          <div className="footer-call-us">
            <h4 className=" body-bold">Вы всегда можете позвонить нам:</h4>
            <p>454355443523</p>
          </div>
          <div className="footer-operating-mode">
            <h4 className="body-bold">Наш режим работы:</h4>
            <p>7:00 - 17:00, ПН - ПТ</p>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>Фермерское хозяйство "Дагон"</p>
      </div>
    </footer>
  );
};

export default Footer;
