import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import classnames from 'classnames';
import { useSpring, animated } from 'react-spring';

import phone1 from 'images/phone-powur-1.png';
import phone2 from 'images/phone-powur-2.png';
import laptop from 'images/laptop_1.png';
import tablet from 'images/tablet_1.png';

function Intro() {
  const [activeBar, setActiveBar] = useState(1);
  const defaultSpringProps = {
    transform: `translateY(-50vh)`,
    opacity: 0,
    config: {
      tension: 150,
      friction: 20
    }
  };
  const enterSpringProps = {
    ...defaultSpringProps,
    transform: `translateY(0vh)`,
    opacity: 1,
    delay: 300
  };
  const leaveSpringProps = {
    ...defaultSpringProps,
    transform: `translateY(50vh)`
  };

  const [springProps1, setSpringProps1] = useSpring(() => defaultSpringProps);
  const [springProps2, setSpringProps2] = useSpring(() => defaultSpringProps);
  const [springProps3, setSpringProps3] = useSpring(() => defaultSpringProps);
  const [springProps4, setSpringProps4] = useSpring(() => defaultSpringProps);

  useEffect(() => {
    console.log(activeBar);
    setTimeout(
      () => {
        activeBar === 4 ? setActiveBar(0) : setActiveBar(activeBar + 1);
        if (activeBar === 1) {
          setSpringProps1(leaveSpringProps);
          setSpringProps2(enterSpringProps);
        } else if (activeBar === 2) {
          setSpringProps2(leaveSpringProps);
          setSpringProps3(enterSpringProps);
        } else if (activeBar === 3) {
          setSpringProps3(leaveSpringProps);
          setSpringProps4(enterSpringProps);
        } else if (activeBar === 4) {
          setSpringProps4(leaveSpringProps);
          setSpringProps1(defaultSpringProps);
          setSpringProps2(defaultSpringProps);
          setSpringProps3(defaultSpringProps);
        } else {
          setSpringProps1(enterSpringProps);
        }
      },
      activeBar === 1 ? 10000 : 5000
    );
  }, [activeBar]); // eslint-disable-line

  useEffect(() => {
    setSpringProps1(enterSpringProps);
  }, []);

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
          <animated.div
            className={styles.devices}
            style={{
              opacity: springProps1.opacity,
              transform: springProps1.transform
            }}
          >
            <img className={styles.device} src={phone1} alt="phone1" />
            <img
              className={classnames(styles.device, styles.phone)}
              src={phone2}
              alt="phone2"
            />
          </animated.div>
          <animated.div
            className={styles.phones}
            style={{
              opacity: springProps2.opacity,
              transform: springProps2.transform
            }}
          >
            <img
              className={classnames(styles.device, styles.laptop)}
              src={laptop}
              alt="laptop"
            ></img>
          </animated.div>
          <animated.div
            className={styles.phones}
            style={{
              opacity: springProps3.opacity,
              transform: springProps3.transform
            }}
          >
            <img
              className={classnames(styles.device, styles.tablet)}
              src={tablet}
              alt="tablet"
            ></img>
          </animated.div>
          <animated.div
            className={styles.phones}
            style={{
              opacity: springProps4.opacity,
              transform: springProps4.transform
            }}
          >
            <img className={styles.device} src={phone1} alt="phone1" />
            <img
              className={classnames(styles.device, styles.phone)}
              src={phone2}
              alt="phone2"
            />
          </animated.div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
