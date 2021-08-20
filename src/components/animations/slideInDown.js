import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

const SlideInDown = props => {
  const { transform, opacity } = useSpring({
    config: { friction: 38, tension: 350 },
    from: {
      transform: 'translateY(-32px)',
      opacity: 0
    },
    to: { transform: 'translateY(0)', opacity: 1 },
    delay: 125
  });

  return (
    <animated.div style={{ transform, opacity }} className={props.className}>
      {props.children}
    </animated.div>
  );
};

SlideInDown.propTypes = {
  children: PropTypes.node
};

export default SlideInDown;
