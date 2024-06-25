import React, { useState } from "react";
import NavLogo from "../../assets/images/i2c-logo.svg";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

import "./Navbar.scss";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navBar container">
      <div className="navLogo">
        <img src={NavLogo} alt="i2c" />
      </div>
      <div className="navMenu">
        <div className="menuIcon" onClick={toggleMenu}>
          {menuOpen ? <RxCross2 /> : <RiMenu3Fill />}
        </div>
        <ul className={menuOpen ? "menuOpen" : ""}>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Registration</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <button className="mainBtn">Contact us</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
