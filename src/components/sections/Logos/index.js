import React from 'react';
import styles from './style.module.scss';

import logoBd from 'images/logo-bd.png';
import logoEdf from 'images/logo-edf.png';
import logoGoogle from 'images/logo-google.png';
import logoHomedepot from 'images/logo-homedepot.png';
import logoIntel from 'images/logo-intel.png';
import logoKnox from 'images/logo-knox.png';
import logoPowur from 'images/logo-powur.png';
import logoNike from 'images/logo-nike.png';
import classNames from 'classnames';

function Logos() {
  return (
    <section className={classNames(styles.layout, styles.container)}>
      <h2 className={styles.header}>Innovation is in our DNA</h2>
      <p className={styles.subheader}>
        Whether it's a startup launch or an enterprise skunk work. EyeCue is
        ready to shoulder the responsibility of the success with you from day
        one.
      </p>
      <div className={styles.logos}>
        <img src={logoGoogle} alt={'logo-google'} />
        <img src={logoBd} alt={'logo-bd'} />
        <img src={logoEdf} alt={'logo-edf'} />
        <img src={logoPowur} alt={'logo-powur'} />
        <img src={logoIntel} alt={'logo-intel'} />
        <img src={logoHomedepot} alt={'logo-homedepot'} />
        <img src={logoKnox} alt={'logo-knox'} />
        <img src={logoNike} alt={'logo-nike'} />
      </div>
    </section>
  );
}

export default Logos;
