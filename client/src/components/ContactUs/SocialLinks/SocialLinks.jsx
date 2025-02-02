import React from 'react'
import styles from './SocialLinks.module.css'
import { MdOutlinePhoneForwarded } from 'react-icons/md'
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5'
import { ImFacebook2 } from 'react-icons/im'
import { LiaTelegram } from 'react-icons/lia'
import { Link } from 'react-router-dom'

const SocialLinks = () => {

    const links = [
        {
            icon: <LiaTelegram />,
            link: 'mailto:cuetplus@gmail.com',
            name: 'info@CUETPlus.com'
        },
        {
            icon: <MdOutlinePhoneForwarded />,
            link: 'tel:7428989898',
            name: '+91 74289 89898'
        },
        {
            icon: <IoChatbubbleEllipsesOutline />,
            link: 'http://www.Instagram.com/cuetplus',
            name: 'Chat on Instagram'
        },
        {
            icon: <ImFacebook2 />,
            link: 'http://www.Facebook.com/cuetplus',
            name: 'Facebook'
        },

    ]

  return (
    <section className={styles.socialLinks}>
        <div className={styles.links}>
            {links.map((link, index) => (
                <Link to={link.link} key={index} className={styles.linkCard} target='_blank'>
                    <div>{link.icon}</div>
                    <span>{link.name}</span>
                </Link>
            ))}
        </div>
    </section>
  )
}

export default SocialLinks