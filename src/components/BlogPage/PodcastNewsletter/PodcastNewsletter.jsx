// File: components/PodcastNewsletter.js
import React from 'react';
import styles from './PodcastNewsletter.module.css';

const PodcastNewsletter = () => {
  return (
    <div className={styles.container}>
      {/* Podcast Section */}
      <div className={styles.podcastSection}>
        <h3 className={styles.heading}>New Podcast</h3>
        <p className={styles.title}>XAT Admit Card 2025 – Release Date, Steps to Download and Other Details</p>
        <p className={styles.author}>Nidhi Priya - December 10, 2024</p>
      </div>

      {/* Newsletter Section */}
      <div className={styles.newsletterSection}>
        <h3 className={styles.heading}>Subscribe to our newsletter</h3>
        <p className={styles.description}>To be updated with all the latest news, offers and special announcements.</p>
        <div className={styles.subscriptionForm}>
          <input type="email" placeholder="Your email address" className={styles.input} />
          <button className={styles.button}>SUBSCRIBE</button>
        </div>
      </div>

      {/* Stay Connected Section */}
      <div className={styles.socialSection}>
        <h3 className={styles.heading}>Stay Connected</h3>
        <div className={styles.socialStats}>
          <div className={styles.socialCard} style={{ backgroundColor: '#3b5998' }}>
            <p className={styles.socialNumber}>35,715</p>
            <p className={styles.socialLabel}>Fans</p>
          </div>
          <div className={styles.socialCard} style={{ backgroundColor: '#8a3ab9' }}>
            <p className={styles.socialNumber}>114,811</p>
            <p className={styles.socialLabel}>Followers</p>
          </div>
          <div className={styles.socialCard} style={{ backgroundColor: '#ff0000' }}>
            <p className={styles.socialNumber}>91,389</p>
            <p className={styles.socialLabel}>Subscribers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastNewsletter;
