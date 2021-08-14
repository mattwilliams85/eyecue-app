import React from 'react';
import styles from './style.module.scss';

function Intro(props) {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.intro}>
          <div>
            <div className={styles.header}>envision design innovate</div>
            <div className={styles.subheader}>
              We are an innovation and software engineering firm that helps
              comapnies innovate, transform and grow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
