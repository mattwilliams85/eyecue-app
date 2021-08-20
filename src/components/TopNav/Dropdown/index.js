import React, { useEffect } from 'react';
import classnames from 'classnames';
import { useSpring, animated } from 'react-spring';

import styles from './style.module.scss';

function Dropdown(props) {
  const { activeNavItem, copy, id } = props;
  const defaultSpringProps = {
    transform: 'translateY(-380px)',
    config: { friction: 26, tension: 250 }
  };
  const [springProps, setSpringProps] = useSpring(() => defaultSpringProps);

  useEffect(() => {
    setSpringProps({
      ...defaultSpringProps,
      transform:
        activeNavItem === id
          ? 'translateY(-10px)'
          : defaultSpringProps.transform
    });
  }, [activeNavItem]); // eslint-disable-line

  return (
    <animated.div className={styles.dropdownOuterwrap} style={springProps}>
      <div
        className={classnames(styles.dropdown, {
          [styles.active]: activeNavItem === id
        })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className={styles.slant}
        >
          <polygon points={'0 100, 100 0, 0 0'} />
        </svg>
        <div className={styles.titleBlock}>
          <div className={styles.header}>{copy.header}</div>
          <div className={styles.subHeader}>{copy.subheader}</div>
        </div>
        <div className={styles.row}>
          <div className={styles.linkBlock}>
            <div>
              <div className={styles.linkHeader}>{copy.title1}</div>
              <div className={styles.linkBody}>{copy.body1}</div>
            </div>
            <div className={styles.button}>learn more</div>
          </div>
          <div className={styles.linkBlock}>
            <div>
              <div className={styles.linkHeader}>{copy.title2}</div>
              <div className={styles.linkBody}>{copy.body2}</div>
            </div>
            <div className={styles.button}>learn more</div>
          </div>
          <div className={styles.linkBlock}>
            <div>
              <div className={styles.linkHeader}>{copy.title3}</div>
              <div className={styles.linkBody}>{copy.body3}</div>
            </div>
            <div className={styles.button}>learn more</div>
          </div>
          <div className={styles.linkBlock}>
            <div>
              <div className={styles.linkHeader}>{copy.title4}</div>
              <div className={styles.linkBody}>{copy.body4}</div>
            </div>
            <div className={styles.button}>learn more</div>
          </div>
        </div>
      </div>
    </animated.div>
  );
}

export default Dropdown;
