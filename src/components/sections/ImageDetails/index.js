import React from 'react';
import styles from './style.module.scss';
import classnames from 'classnames';

import iconArrow from 'images/icon-arrow.png';

function ImageDetails({
  backgroundColor,
  image,
  title,
  copy,
  large,
  isImageRight
}) {
  function createMarkup(message) {
    return { __html: message };
  }

  return (
    <div
      className={classnames(styles.container, {
        [styles.large]: large
      })}
      style={{ backgroundColor: backgroundColor }}
    >
      <div
        className={classnames(styles.image, {
          [styles.right]: isImageRight
        })}
        style={{
          backgroundImage: `url(${image})`
        }}
      />
      <div className={styles.layout}>
        <div className={styles.innerLayout}>
          <div className={styles.title}>{title}</div>
          <div
            className={styles.body}
            dangerouslySetInnerHTML={createMarkup(copy)}
          />
          <div className={styles.moreDetails}>
            More Details <img src={iconArrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageDetails;
