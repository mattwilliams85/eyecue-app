import React from 'react';
import styles from './style.module.scss';
import classnames from 'classnames';

function Icons({ withPadding, topic, header, subheader, icons }) {
  return (
    <div
      className={classnames(styles.container, {
        [styles.withPadding]: withPadding
      })}
    >
      <div className={styles.layout}>
        <div>
          <div className={styles.topic}>{topic}</div>
          <div className={classnames(styles.header, styles.gradient)}>
            {header}
          </div>
          <div className={classnames(styles.subheader, styles.gradient)}>
            {subheader}
          </div>
        </div>
        <div className={styles.icons}>
          {icons.map((icon, index) => {
            return (
              <div className={styles.iconGroup} key={index}>
                <img src={icon.img} alt={'logo'} />
                <div className={classnames(styles.label, styles.gradient)}>
                  {icon.title}
                </div>
                <div className={styles.description}>{icon.copy}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Icons;
