import React from 'react';
import styles from './style.module.scss';
import Slant from 'components/Slant';

function Cards() {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.topic}>case studies</div>
        <div className={styles.header}>
          Connect the Dots Between Usability & Technology
        </div>
        <div className={styles.subheader}>
          See how we leverage AI, digital product development and user-first
          design to transform how these industries work.
        </div>
      </div>
      <Slant bottom />
    </div>
  );
}

export default Cards;
