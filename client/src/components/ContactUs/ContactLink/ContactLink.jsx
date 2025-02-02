import React from 'react';
import styles from './ContactLink.module.css'; // Import the CSS Module
import { MdKeyboardArrowRight, MdOutlineWhatsapp } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { RiMailOpenFill } from "react-icons/ri";

function ContactLink() {
  return (
    <div className={styles.ContactLink}>
        <div className={styles.contactBox}>
            <h3>Customer <span>Support</span></h3>
            <p>Have a query or grievance? Get in touch with our customer support executive here</p>
            <a href="">Customer Support <MdKeyboardArrowRight /></a>
        </div>
        <div className={styles.contactBox}>
            <h3>Careers at <span>CUET+</span></h3>
            <p>CUET+ is an equal opportunity workplace and an action-oriented employer.</p>
            <a href="">Apply here <MdKeyboardArrowRight /></a>
        </div>
        <div className={styles.contactBox}>
            <h3>Franchisee <span>Queries</span></h3>
            <p>Transform your passion for education into a successful venture</p>
            <a href="tel:7428989898"><BsTelephoneFill /> +91 74289 89898</a>
            <a href="https://api.whatsapp.com/send?phone=7428989898"><MdOutlineWhatsapp /> +91 74289 89898</a>
            <a href="mailto:cuetplus@gmail.com"><RiMailOpenFill /> cuetplus@gmail.com</a>
        </div>
    </div>
  );
}

export default ContactLink;
