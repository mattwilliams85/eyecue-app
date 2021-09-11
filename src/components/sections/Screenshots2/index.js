import React from 'react';
import styles from './style.module.scss';
import classnames from 'classnames';

import page1 from 'images/screenshot_4.png';
import page2 from 'images/screenshot_5.png';
import page3 from 'images/screenshot_6.png';
import pageFade from 'images/screenshot_fade.png';

function Screenshots2({ company, author }) {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <img
          className={classnames(styles.page, styles.fade)}
          src={pageFade}
          alt="pageFade"
        />
        <img
          className={classnames(styles.page, styles.top)}
          src={page3}
          alt="page3"
        />
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
            You guys are the real deal and we really appreciate the extra work
            and long hours. I can’t wait to calculate the token savings
            comparisons between the legacy system and Hub. Going to be mind
            blowing.
          </div>
          <div className={styles}>{author}</div>
          <div className={styles}>{company}</div>
        </div>
      </div>
    </div>
  );
}

export default Screenshots2;
