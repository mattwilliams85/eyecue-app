import React from 'react';
import styles from './style.module.scss';
import eyecuelogo from 'images/eyecue-logo.png';

function TopNav() {
  return (
    <div className={styles.outerWrap}>
      <div className={styles.topnav}>
        <div className={styles.flexWrap}>
          <img src={eyecuelogo} alt="logo" />
          <div className={styles.navItem}>Innovation Services</div>
          <div className={styles.navItem}>Industries</div>
          <div className={styles.navItem}>Client Success</div>
          <div className={styles.navItem}>Insights</div>
        </div>
        <div className={styles.flexWrap}>
          <div className={styles.contact}>Contact Us</div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
