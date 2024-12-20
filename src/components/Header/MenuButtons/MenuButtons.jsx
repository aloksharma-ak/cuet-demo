import React from "react";
import { Link } from "react-router-dom";
import login_svg from "../../../assets/login.svg";
import styles from "./MenuButtons.module.css";

function MenuButtons() {
  return (
    <ul className={styles.menuBtn}>
      <li className={styles.menuButton}>
        <Link to="/login" className={`${styles.btn} ${styles.btnBgOrange}`}>
          <img src={login_svg} alt="login-img" />
          <span>Login</span>
        </Link>
        <Link to="" className={`${styles.btn} ${styles.mobileLoginBtn}`}>
          <img src={login_svg} alt="login-img" />
        </Link>
      </li>
    </ul>
  );
}

export default MenuButtons;
