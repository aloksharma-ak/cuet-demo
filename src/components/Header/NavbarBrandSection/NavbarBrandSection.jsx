import React from "react";
import { Link } from "react-router-dom";
import logo_cuetPlus from "../../../assets/CUETPlus_logo.png";
import logoMob from "../../../assets/CUETPlus_logo_mob.png";
import styles from "./NavbarBrandSection.module.css";

function NavbarBrandSection({ onLogoClick }) {
  return (
    <div className={styles.navbarBrandSection}>
      <Link to="/" className={styles.navbarBrand} onClick={onLogoClick}>
        <img src={logo_cuetPlus} alt="CUETPlus logo" className={styles.logo} />
        <img src={logoMob} alt="CUETPlus logo" className={styles.logoMob} />
      </Link>

      <div className={styles.mobileScholarship}>
        <Link to="/cuet-scholarship">
          <h2 className={styles.mobileScholarshipTitle}>Scholarship</h2>
        </Link>
      </div>
    </div>
  );
}

export default NavbarBrandSection;
