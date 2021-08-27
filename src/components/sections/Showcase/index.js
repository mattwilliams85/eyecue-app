import React from 'react';
import styles from './style.module.scss';

function Showcase({
  title,
  subheader,
  background,
  darkMode,
  deviceImg,
  deviceStyles,
  copy = {}
}) {
  function createMarkup(message) {
    return { __html: message };
  }

  return (
    <div
      className={styles.container}
      style={{ color: darkMode ? 'black' : 'white' }}
    >
      <img
        className={styles.containerBackground}
        src={background}
        alt="background"
      />
      <div className={styles.layout}>
        <div className={styles.topWrap}>
          <div className={styles.titleWrap}>
            <div className={styles.topic}>Case Study</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.subheader}>{subheader}</div>
          </div>
          <img
            className={styles.tabletImg}
            src={deviceImg}
            style={deviceStyles}
            alt={'device'}
          />
        </div>
        <div className={styles.bodyWrap}>
          <div
            className={styles.textBlock}
            dangerouslySetInnerHTML={createMarkup(copy.block1)}
          ></div>
          <div
            className={styles.textBlock}
            dangerouslySetInnerHTML={createMarkup(copy.block2)}
          ></div>
          <div
            className={styles.textBlock}
            dangerouslySetInnerHTML={createMarkup(copy.block3)}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
