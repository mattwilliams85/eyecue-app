import React from 'react';
import styles from './style.module.scss';

function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.header}>Let's Build Something Amazing</div>
        <a className={styles.button} href="mailto:hello@eyecuelab.com">
          contact eyecue
        </a>
      </div>
    </div>
  );
}

export default Contact;
