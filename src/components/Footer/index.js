import React from 'react';
import styles from './style.module.scss';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.innerWrap}>
        <div>Copyright 2021, EyeCue Lab</div>
        <div>
          <a href="mailto:hello@eyecuelab.com">hello@eyecuelab.com</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
