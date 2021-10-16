import React from 'react';
import styles from './style.module.scss';
import classnames from 'classnames';

import page1 from 'images/screenshot_4.png';
import page2 from 'images/screenshot_5.png';
import page3 from 'images/screenshot_6.png';
import pageFade from 'images/screenshot_fade.png';
import Slant from 'components/Slant';

function Screenshots2({
  company,
  body,
  author,
  quoteBackground,
  screenshots = {}
}) {
  return (
    <div className={styles.container}>
      <Slant customStyle={{ top: '-210px', height: '210px' }} inverted />
      <div className={styles.layout}>
        <img
          className={classnames(styles.page, styles.fade)}
          src={screenshots.fade || pageFade}
          alt="pageFade"
        />
        <img
          className={classnames(styles.page, styles.top)}
          src={screenshots.page1 || page1}
          alt="page3"
        />
        <img
          className={classnames(styles.page, styles.left)}
          src={screenshots.page2 || page2}
          alt="page1"
        />
        <img
          className={classnames(styles.page, styles.right)}
          src={screenshots.page3 || page3}
          alt="page2"
        />
        <div
          className={styles.rectangle}
          style={{
            backgroundImage: quoteBackground && `url(${quoteBackground})`
          }}
        >
          <div className={styles.body}>{body}</div>
          <div className={styles}>{author}</div>
          <div className={styles}>{company}</div>
        </div>
      </div>
    </div>
  );
}

export default Screenshots2;
