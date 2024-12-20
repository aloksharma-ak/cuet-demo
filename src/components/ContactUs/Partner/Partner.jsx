import React from 'react';
import styles from './Partner.module.css'; // Import the CSS Module
import icon_Franchisee from '../../../assets/icon_Franchisee.png';
import icon_Universities from '../../../assets/icon_Universities.png';
import icon_Schools from '../../../assets/icon_Schools.png';
import icon_Study_abroad from '../../../assets/icon_Study Abroad.png';

function Partner() {
  return (
    <div className={styles.partner}>
        <h2>Partner <span>with us</span></h2>
        <p>Join hands with us for a meaningful partnership for nation building</p>
        <div className={styles.partnerBox}>
            <div className={styles.box}>
                <img src={icon_Franchisee} alt="franchisee" />
                <h3>Franchisees</h3>
            </div>
            <div className={styles.box}>
                <img src={icon_Universities} alt="Universities" />
                <h3>Universities</h3>
            </div>
            <div className={styles.box}>
                <img src={icon_Schools} alt="Schools" />
                <h3>Schools</h3>
            </div>
            <div className={styles.box}>
                <img src={icon_Study_abroad} alt="Study Abroad" />
                <h3>Study Abroad</h3>
            </div>
        </div>
    </div>
  );
}

export default Partner;
