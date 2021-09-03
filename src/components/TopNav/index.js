import React, { useState } from 'react';
import classnames from 'classnames';
import Dropdown from './Dropdown';
import { COPY } from './Dropdown/copy.js';

import styles from './style.module.scss';
import eyecuelogo from 'images/eyecue-logo.png';

function TopNav() {
  const [activeNavItem, setActiveNavItem] = useState();

  function toggleDropdown(id) {
    activeNavItem === id ? setActiveNavItem() : setActiveNavItem(id);
  }

  return (
    <>
      <div className={styles.outerWrap}>
        <div className={styles.topnav}>
          <div className={styles.flexWrap}>
            <img src={eyecuelogo} alt="logo" />
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
              Industries
            </div>
            <div
              className={classnames(styles.navItem, {
                [styles.active]: activeNavItem === 3
              })}
              onClick={() => toggleDropdown(3)}
            >
              Client Success
            </div>
            <div
              className={classnames(styles.navItem, {
                [styles.active]: activeNavItem === 4
              })}
              onClick={() => toggleDropdown(4)}
            >
              Insights
            </div>
          </div>
          <div className={styles.flexWrap}>
            <div className={styles.contact}>Contact Us</div>
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
        copy={COPY.innovation}
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
    </>
  );
}

export default TopNav;
