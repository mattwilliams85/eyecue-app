import React from 'react';
import styles from './style.module.scss';

function Title() {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.main}>
          <div>
            <div className={styles.topic}>For Angel-backend Startups</div>
            <div className={styles.header}>
              100% Coverage from Concept to Launch
            </div>
            <div className={styles.subheader}>
              Whether it’s usability/design guidance for tech founders, or a
              complete launch solution for non-tech founders, we’ve got you
              covered.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
