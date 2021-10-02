import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style.module.scss';

function ChooseSolutions() {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.header}>Choose Your Own Adventure</div>
        <div className={styles.subheader}>
          There are many paths to success through innovation, which one are you?
        </div>
        <div className={styles.row}>
          <div className={styles.block}>
            <div className={styles.title}>AI-Assisted & ML Applications</div>
            <div className={styles.body}>
              Congrats, you’ve found a couple of early investors who share your
              vision!
              <br />
              <br />
              Now you need a seasoned team that has experienced in launching
              startups and take your vision to the highest quality MVP.
            </div>
            <Link to="/solutions-ml">
              <div className={styles.learnmore}>learn more</div>
            </Link>
          </div>
          <div className={styles.block}>
            <div className={styles.title}>
              Work Automation & Workflow Design
            </div>
            <div className={styles.body}>
              You know it’s going to be so much more productive if you can just
              automate parts of the manual work and replace some of the legacy
              systems.
              <br />
              <br />
              Now you need a team to build the right tools without costing an
              arm and a leg. MVP.
            </div>
            <Link to="/solutions-workflow">
              <div className={styles.learnmore}>learn more</div>
            </Link>
          </div>
          <div className={styles.block}>
            <div className={styles.title}>Enterprise Strategic Partnership</div>
            <div className={styles.body}>
              The company’s growth has slowed and you need an outside
              perspective to evaluate the right opportunity to pivot in your
              product or service offerings.
              <br />
              <br />
              Now you need to collaborate with a team that has deep industry
              expertise and can help illuminate new possibilities.
            </div>
            <Link to="/solutions-partnership">
              <div className={styles.learnmore}>learn more</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseSolutions;
