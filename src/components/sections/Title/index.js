import React from 'react';
import styles from './style.module.scss';

function Title({ background, topic, title, subheader }) {
  return (
    <div className={styles.container}>
      <img
        className={styles.containerBackground}
        src={background}
        alt="background"
      />
      <div className={styles.layout}>
        <div className={styles.main}>
          <div>
            <div className={styles.topic}>{topic}</div>
            <div className={styles.header}>{title}</div>
            <div className={styles.subheader}>{subheader}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
