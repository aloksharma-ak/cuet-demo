import React from 'react'
import styles from './FloatingSocialLink.module.css'
import { FiPhoneOutgoing } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const FloatingSocialLink = () => {
  return (
    <div className={styles.FloatingSocialLink}>
        <Link to="tel:7428989898" target='_blank' className={`${styles.socialLink} ${styles.orange}`}><FiPhoneOutgoing /></Link>
        <Link to="https://wa.me/917428989898" target='_blank' className={`${styles.socialLink} ${styles.green}`}><FaWhatsapp /></Link>        
    </div>
  )
}

export default FloatingSocialLink