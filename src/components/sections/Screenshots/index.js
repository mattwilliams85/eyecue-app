import React from 'react';
import styles from './style.module.scss';
import classnames from 'classnames';

import page1 from 'images/page_1.png';
import page2 from 'images/page_2.png';

function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <img
          className={classnames(styles.page, styles.left)}
          src={page1}
          alt="page1"
        />
        <img
          className={classnames(styles.page, styles.right)}
          src={page2}
          alt="page2"
        />
        <div className={styles.rectangle}>
          <div className={styles.body}>
            You guys did a fantastic job. Everything looks amazing, and it's
            really clear to me we have built a foundation we can now layer a
            totally differentiated business model on top of.
          </div>
          <div className={styles}>Jonathan Budd</div>
          <div className={styles}>Powur, CEO</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
