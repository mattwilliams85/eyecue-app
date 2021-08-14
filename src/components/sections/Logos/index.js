import React from 'react';
import styles from './style.module.scss';
import Slant from 'components/Slant';

function Logos() {
  return (
    <div className={styles.container}>
      <Slant />
      <div className={styles.layout}>
        <div className={styles.header}>Innovation is in our DNA</div>
        <div className={styles.subheader}>
          Whether it's a startup launch or an enterprise skunk work. EyeCue is
          ready to shoulder the responsibility of the success with you from day
          one.
        </div>
      </div>
    </div>
  );
}

export default Logos;
