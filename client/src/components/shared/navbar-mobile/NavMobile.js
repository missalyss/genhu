import React from "react";
import Menu from "../../../assets/Icons/Menu.svg";
import styles from './NavStyles.css';

const NavMobile = ({ toggleNavModal, showNavModal }) => {
  return showNavModal === false ? (
    <div className="main-nav-mobile">
      <div className="drop-down">
        <img src={Menu} onClick={toggleNavModal} className="menu-mob-icon" />
      </div>
      <div></div>
    </div>
  ) : (
    <></>
  );
};

export default NavMobile;