import React, { useEffect } from 'react';
import classnames from 'classnames';
import { useSpring, animated } from 'react-spring';
import Dropdown from '../Dropdown';
import { COPY } from '../Dropdown/copy.js';
import { Link } from 'react-router-dom';

import styles from './style.module.scss';

function MobileMenu(props) {
  const {
    isMobileMenuActive,
    activeNavItem,
    setActiveNavItem,
    setIsMobileMenuActive
  } = props;
  const defaultSpringProps = {
    transform: 'translate3d(0, -100vh, 0)',
    config: { friction: 26, tension: 250 }
  };
  const defaultInnerSpringProps = {
    transform: 'translate3d(0vw, 0, 0)',
    config: { friction: 26, tension: 250 }
  };
  const [springProps, setSpringProps] = useSpring(() => defaultSpringProps);
  const [innerSpringProps, setInnerSpringProps] = useSpring(
    () => defaultInnerSpringProps
  );

  useEffect(() => {
    setSpringProps({
      ...defaultSpringProps,
      transform: isMobileMenuActive
        ? 'translate3d(0, 0vh, 0)'
        : defaultSpringProps.transform
    });

    if (!isMobileMenuActive) {
      setInnerSpringProps({
        ...defaultInnerSpringProps,
        transform: defaultInnerSpringProps.transform,
        onRest: () => {
          setActiveNavItem(0);
        }
      });
    }
  }, [isMobileMenuActive, activeNavItem]); // eslint-disable-line

  useEffect(() => {
    if (activeNavItem > 0) {
      setInnerSpringProps({
        ...defaultInnerSpringProps,
        transform: isMobileMenuActive
          ? 'translate3d(-100vw, 0vh, 0)'
          : defaultInnerSpringProps.transform
      });
    } else {
      setInnerSpringProps({
        defaultInnerSpringProps,
        transform: isMobileMenuActive
          ? 'translate3d(0vw, 0vh, 0)'
          : defaultInnerSpringProps.transform
      });
    }
  }, [activeNavItem]); // eslint-disable-line

  function toggleSideMenu(id) {
    activeNavItem === id ? setActiveNavItem() : setActiveNavItem(id);
  }

  return (
    <>
      <animated.div className={styles.dropdownOuterwrap} style={springProps}>
        <div
          className={classnames(styles.dropdown, {
            [styles.active]: isMobileMenuActive
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
          <animated.div
            style={innerSpringProps}
            className={classnames(styles.innerWrap, {
              [styles.active]: isMobileMenuActive
            })}
          >
            <div className={styles.navItemBlock}>
              <div
                className={classnames(styles.navItem, {
                  [styles.active]: activeNavItem === 1
                })}
                onClick={() => toggleSideMenu(1)}
              >
                Innovation Services
              </div>
              <div className={styles.description}>
                Which kind of entrepreneur are you?
              </div>
            </div>
            <div className={styles.navItemBlock}>
              <div
                className={classnames(styles.navItem, {
                  [styles.active]: activeNavItem === 2
                })}
                onClick={() => toggleSideMenu(2)}
              >
                Solution Spaces
              </div>
              <div className={styles.description}>
                Shaped your innovation on these foundational elements.
              </div>
            </div>
            <Link to="/process">
              <div className={styles.navItemBlock}>
                <div className={styles.navItem}>Process</div>
                <div className={styles.description}>
                  We make partners, not clients.
                </div>
              </div>
            </Link>
            <Link to="/blog">
              <div className={styles.navItemBlock}>
                <div className={styles.navItem}>Insights</div>
                <div className={styles.description}>
                  Let's build something amazing.
                </div>
              </div>
            </Link>
          </animated.div>
          <Dropdown
            activeNavItem={activeNavItem}
            setActiveNavItem={setActiveNavItem}
            setIsMobileMenuActive={setIsMobileMenuActive}
            copy={COPY.innovation}
            id={1}
            isMobile
          />
          <Dropdown
            activeNavItem={activeNavItem}
            setActiveNavItem={setActiveNavItem}
            setIsMobileMenuActive={setIsMobileMenuActive}
            copy={COPY.solutions}
            id={2}
            isMobile
          />
        </div>
      </animated.div>
    </>
  );
}

export default MobileMenu;
