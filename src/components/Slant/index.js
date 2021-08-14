import React from 'react';
import styles from './style.module.scss';
import classnames from 'classnames';

function Slant(props) {
  const { bottom } = props;
  const points = bottom ? '0,0 100, 0 100, 100' : '0,0 100, 100, 0, 100';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={classnames(styles.slant, {
        [styles.bottom]: bottom
      })}
    >
      <polygon fill="white" points={points} />
    </svg>
  );
}

export default Slant;
