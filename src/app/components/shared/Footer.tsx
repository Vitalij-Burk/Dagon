import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19625.552256021034!2d29.094372025175673!3d52.05799054166177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d61693b16b042d%3A0x6f7ead7b162554d6!2z0J_RgNGD0LTQvtC6LCDQk9C-0LzQtdC70YzRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0JHQtdC70LDRgNGD0YHRjA!5e0!3m2!1sru!2sru!4v1710906021569!5m2!1sru!2sru"
            className=" h-96 mr-10 rounded-xl w-full"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
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
