import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown';
import { COPY } from '../Dropdown/copy.js';

import styles from './style.module.scss';

function MobileMenu(props) {
  const { isMobileMenuActive } = props;
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
  const [activeNavItem, setActiveNavItem] = useState();

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
  }, [isMobileMenuActive]); // eslint-disable-line

  useEffect(() => {
    if (activeNavItem > 0) {
      setInnerSpringProps({
        ...defaultInnerSpringProps,
        transform: isMobileMenuActive
          ? 'translate3d(-100vw, 0vh, 0)'
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
            <div
              className={classnames(styles.navItem, {
                [styles.active]: activeNavItem === 1
              })}
              onClick={() => toggleSideMenu(1)}
            >
              Innovation Services
            </div>
            <div
              className={classnames(styles.navItem, {
                [styles.active]: activeNavItem === 2
              })}
              onClick={() => toggleSideMenu(2)}
            >
              Industries
            </div>
            <div
              className={classnames(styles.navItem, {
                [styles.active]: activeNavItem === 3
              })}
              onClick={() => toggleSideMenu(3)}
            >
              Client Success
            </div>
            <div
              className={classnames(styles.navItem, {
                [styles.active]: activeNavItem === 4
              })}
              onClick={() => toggleSideMenu(4)}
            >
              Insights
            </div>
          </animated.div>
          <Dropdown
            activeNavItem={activeNavItem}
            setActiveNavItem={setActiveNavItem}
            copy={COPY.innovation}
            id={1}
            isMobile
          />
          <Dropdown
            activeNavItem={activeNavItem}
            setActiveNavItem={setActiveNavItem}
            copy={COPY.innovation}
            id={2}
            isMobile
          />
          <Dropdown
            activeNavItem={activeNavItem}
            setActiveNavItem={setActiveNavItem}
            copy={COPY.innovation}
            id={3}
            isMobile
          />
          <Dropdown
            activeNavItem={activeNavItem}
            setActiveNavItem={setActiveNavItem}
            copy={COPY.innovation}
            id={4}
            isMobile
          />
        </div>
      </animated.div>
    </>
  );
}

export default MobileMenu;
