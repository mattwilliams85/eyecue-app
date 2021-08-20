import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import classnames from 'classnames';

import phone1 from 'images/phone-powur-1.png';
import phone2 from 'images/phone-powur-2.png';

function Intro() {
  const [activeBar, setActiveBar] = useState(1);

  useEffect(() => {
    setTimeout(
      () => {
        activeBar === 4 ? setActiveBar(0) : setActiveBar(activeBar + 1);
      },
      activeBar === 1 ? 10000 : 5000
    );
  }, [activeBar]);

  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.intro}>
          <div>
            <div className={styles.header}>envision design innovate</div>
            <div className={styles.subheader}>
              We are an innovation and software engineering firm that helps
              comapnies innovate, transform and grow.
            </div>
            <div className={styles.barGroup}>
              <div
                className={classnames(styles.progressBar, {
                  [styles.active]: activeBar > 0
                })}
              >
                <div className={styles.progressBarInner}></div>
              </div>
              <div
                className={classnames(styles.progressBar, {
                  [styles.active]: activeBar > 1
                })}
              >
                <div className={styles.progressBarInner}></div>
              </div>
              <div
                className={classnames(styles.progressBar, {
                  [styles.active]: activeBar > 2
                })}
              >
                <div className={styles.progressBarInner}></div>
              </div>
              <div
                className={classnames(styles.progressBar, {
                  [styles.active]: activeBar > 3
                })}
              >
                <div className={styles.progressBarInner}></div>
              </div>
            </div>
            <div className={styles.barTitle}>
              Powur | Marketplace, Automation
            </div>
          </div>
          <div className={styles.phones}>
            <img className={styles.phone} src={phone1} alt="phone1"></img>
            <img className={styles.phone} src={phone2} alt="phone2"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
