import React from 'react';
import styles from './style.module.scss';
import classnames from 'classnames';

import logoBd from 'images/logo-bd.png';
import logoEdf from 'images/logo-edf.png';
import logoGoogle from 'images/logo-google.png';
import logoHomedepot from 'images/logo-homedepot.png';
import logoIntel from 'images/logo-intel.png';
import logoKnox from 'images/logo-knox.png';
import logoPowur from 'images/logo-powur.png';
import logoNike from 'images/logo-nike.png';

function Logos({ withPadding }) {
  return (
    <div
      className={classnames(styles.container, {
        [styles.withPadding]: withPadding
      })}
    >
      <div className={styles.layout}>
        <div className={styles.header}>Innovation is in our DNA</div>
        <div className={styles.subheader}>
          Whether it's a startup launch or an enterprise skunk work. EyeCue is
          ready to shoulder the responsibility of the success with you from day
          one.
        </div>
        <div className={styles.logos}>
          <div className={styles.block}>
            <img src={logoGoogle} alt={'logo-google'} />
            <img src={logoBd} alt={'logo-bd'} />
          </div>
          <div className={styles.block}>
            <img src={logoEdf} alt={'logo-edf'} />
            <img src={logoPowur} alt={'logo-powur'} />
          </div>
          <div className={styles.block}>
            <img src={logoIntel} alt={'logo-intel'} />
            <img src={logoHomedepot} alt={'logo-homedepot'} />
          </div>
          <div className={styles.block}>
            <img src={logoKnox} alt={'logo-knox'} />
            <img src={logoNike} alt={'logo-nike'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logos;
