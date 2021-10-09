import React, { useEffect, useState } from 'react';
import classnames from 'classnames';

import Dropdown from './Dropdown';
import MobileMenu from './MobileMenu';
import { COPY } from './Dropdown/copy.js';
import { Link } from 'react-router-dom';

import styles from './style.module.scss';
import eyecuelogo from 'images/eyecue-logo.png';

function TopNav() {
  const [activeNavItem, setActiveNavItem] = useState();
  const [isMobileMenuActive, setIsMobileMenuActive] = useState();

  function toggleDropdown(id) {
    activeNavItem === id ? setActiveNavItem() : setActiveNavItem(id);
  }

  function handleResize() {
    setActiveNavItem();
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className={styles.outerWrap}>
        <div className={styles.topnav}>
          <div className={styles.flexWrap}>
            <Link to="/">
              <img src={eyecuelogo} alt="logo" className={styles.logo} />
            </Link>
            <div
              className={classnames(styles.navItem, {
                [styles.active]: activeNavItem === 1
              })}
              onClick={() => toggleDropdown(1)}
            >
              Innovation Services
            </div>
            <div
              className={classnames(styles.navItem, {
                [styles.active]: activeNavItem === 2
              })}
              onClick={() => toggleDropdown(2)}
            >
              Solution Spaces
            </div>
            <Link
              className={classnames(styles.navItem, styles.link)}
              to={'/process'}
            >
              Process
            </Link>
            <a
              className={classnames(styles.navItem, styles.link)}
              href="https://www.eyecuelab.com/blog/"
            >
              Insights
            </a>
          </div>
          <div className={styles.flexWrap}>
            <div className={styles.contact}>Contact Us</div>
          </div>
          <div className={styles.mobileWrap}>
            <img src={eyecuelogo} alt="logo" />
            <div
              className={classnames(styles.hamburger, {
                [styles.active]: isMobileMenuActive
              })}
              onClick={() => setIsMobileMenuActive(!isMobileMenuActive)}
            ></div>
          </div>
        </div>
      </div>
      <Dropdown
        activeNavItem={activeNavItem}
        setActiveNavItem={setActiveNavItem}
        copy={COPY.innovation}
        id={1}
      />
      <Dropdown
        activeNavItem={activeNavItem}
        setActiveNavItem={setActiveNavItem}
        copy={COPY.solutions}
        id={2}
      />
      <Dropdown
        activeNavItem={activeNavItem}
        setActiveNavItem={setActiveNavItem}
        copy={COPY.innovation}
        id={3}
      />
      <Dropdown
        activeNavItem={activeNavItem}
        setActiveNavItem={setActiveNavItem}
        copy={COPY.innovation}
        id={4}
      />
      <MobileMenu
        isMobileMenuActive={isMobileMenuActive}
        setIsMobileMenuActive={setIsMobileMenuActive}
        activeNavItem={activeNavItem}
        setActiveNavItem={setActiveNavItem}
      />
    </>
  );
}

export default TopNav;
