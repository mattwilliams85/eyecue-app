import React from 'react';
import styles from './style.module.scss';
import classnames from 'classnames';

function Slant(props) {
  const { bottom, inverted, customStyle } = props;
  const points = inverted ? '0,0 100, 100, 0, 100' : '0,0 100, 0 100, 100';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="white"
      preserveAspectRatio="none"
      style={customStyle}
      className={classnames(styles.slant, {
        [styles.bottom]: bottom
        // [styles.inverted]: inverted
      })}
    >
      <polygon fill="white" points={points} />
    </svg>
  );
}

export default Slant;
