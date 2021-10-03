import React, { useEffect } from 'react';
import classnames from 'classnames';
import { useSpring, animated } from 'react-spring';
import { Link, useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import styles from './style.module.scss';

function Dropdown(props) {
  const {
    activeNavItem,
    copy,
    id,
    setActiveNavItem,
    isMobile,
    setIsMobileMenuActive
  } = props;
  const history = useHistory();
  const defaultSpringProps = {
    transform: isMobile ? 'translateX(100vw)' : 'translateY(-380px)',
    config: { friction: 26, tension: 250 }
  };
  const [springProps, setSpringProps] = useSpring(() => defaultSpringProps);
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)'
  });

  useEffect(() => {
    setSpringProps({
      ...defaultSpringProps,
      transform:
        activeNavItem === id
          ? isMobile
            ? 'translateX(0vw)'
            : 'translateY(-10px)'
          : defaultSpringProps.transform
    });

    if (isMobile && activeNavItem === 0) {
      setSpringProps({
        ...defaultSpringProps,
        transform: 'translateX(100vw)'
      });
    }
  }, [activeNavItem]); // eslint-disable-line

  return (
    <>
      {activeNavItem === id && (
        <div
          className={styles.overlay}
          onClick={() => {
            setActiveNavItem();
          }}
        />
      )}
      <animated.div
        className={classnames(styles.dropdownOuterwrap, {
          [styles.mobile]: isMobile
        })}
        style={springProps}
      >
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
            <div className={styles.header} onClick={() => setActiveNavItem()}>
              {copy.header}
            </div>
            <div className={styles.subHeader}>{copy.subheader}</div>
          </div>
          <div className={styles.row}>
            {copy.links.map((link, index) => {
              return (
                <div className={styles.linkBlock} key={index}>
                  <div>
                    <div
                      className={styles.linkHeader}
                      onClick={() => {
                        setIsMobileMenuActive(false);
                        history.push(`/${link.url}`);
                      }}
                    >
                      {isDesktop ? link.title : link.mobileTitle}
                    </div>
                    <div className={styles.linkBody}>{link.body}</div>
                  </div>
                  <Link className={styles.button} to={`/${link.url}`}>
                    learn more
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </animated.div>
    </>
  );
}

export default Dropdown;
