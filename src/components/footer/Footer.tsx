import React from "react";
import FooterLogo from "../../assets/images/i2c-logo.svg";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="container footerSection">
      <div className="footer">
        <div className="footerLogo">
          <img src={FooterLogo} alt="i2c" />
        </div>
        <div className="footerMenu">
          <ul>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Other</a>
            </li>
            <li>
              <button className="mainBtn">Contact us</button>
            </li>
          </ul>
        </div>
      </div>
      <p className="copyrightText">
        Copyright © 2023 i2c inc. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
