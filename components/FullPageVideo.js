import React from 'react';
import styles from './FullPageVideo.module.css';

const FullPageVideo = () => {
  return (
    <div className={styles.videoContainer}>
      <video autoPlay muted loop className={styles.video}>
        <source src="/path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlay}>
        <div className={styles.buttons}>
          <button className={styles.button}>Button 1</button>
          <button className={styles.button}>Button 2</button>
        </div>
        <a href="#next-section" className={styles.arrow}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16l-4-4h8l-4 4z" fill="#ffffff" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default FullPageVideo;
