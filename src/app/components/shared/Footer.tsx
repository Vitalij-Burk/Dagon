import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
            
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
        <p>674 Gonzales Drive. Washington, PA 15301</p>
      </div>
    </footer>
  );
};

export default Footer;
