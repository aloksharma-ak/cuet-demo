import React from 'react';
import { FaCheck } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import map_india from '../../../assets/India-removebg.png';
import styles from './ContactPageIntro.module.css'; // Import the CSS Module

function ContactIntro() {
  return (
    <div className={styles.contactIntro}>
        <div className={styles.left}>
            <h2>Find a center near you</h2>
            <p>Our 200+ centers, spread across the nation, are more than just classrooms. They are hubs of academic excellence where dreams are nurtured, skills are honed, and futures are built.</p>
            <div className={styles.points}>
                <span><FaCheck /> Personalized learning from top educators in your city</span>
                <span><FaCheck /> State-of-the-Art Facilities with latest technologies</span>
                <span><FaCheck /> Unparalleled in-person experience</span>
            </div>
            <a href="#">Find a center near me <MdKeyboardArrowRight /></a>
        </div>

        <map name="india">
            <img src={map_india} alt="india" />
        </map>
    </div>
  )
}

export default ContactIntro;
