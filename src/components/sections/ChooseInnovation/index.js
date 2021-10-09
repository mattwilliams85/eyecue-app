import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import styles from './style.module.scss';

function ChooseInnovation() {
  const { pathname } = useLocation();

  return (
    <div
      className={classNames(styles.container, {
        [styles.allLinks]: pathname === '/'
      })}
    >
      <div className={styles.layout}>
        <div className={styles.header}>Choose Your Adventure</div>
        <div className={styles.subheader}>
          There are many paths to success through innovation, which one are you?
        </div>
        <div className={styles.row}>
          {pathname !== '/startups' && (
            <div className={styles.block}>
              <div className={styles.title}>Angel-backed Startups</div>
              <div className={styles.body}>
                Congrats, you’ve found a couple of early investors who share
                your vision!
                <br />
                <br />
                Now you need a seasoned team that has experienced in launching
                startups and take your vision to the highest quality MVP.
              </div>
              <Link to="/startups">
                <div className={styles.learnmore}>learn more</div>
              </Link>
            </div>
          )}
          {pathname !== '/enterprise' && (
            <div className={styles.block}>
              <div className={styles.title}>Enterprise Intrapreneurs</div>
              <div className={styles.body}>
                You know it’s going to be so much more productive if you can
                just automate parts of the manual work and replace some of the
                legacy systems.
                <br />
                <br />
                Now you need a team to build the right tools without costing an
                arm and a leg. MVP.
              </div>
              <Link to="/enterprise">
                <div className={styles.learnmore}>learn more</div>
              </Link>
            </div>
          )}
          {pathname !== '/product' && (
            <div className={styles.block}>
              <div className={styles.title}>Product Pivot & Innovation</div>
              <div className={styles.body}>
                The company’s growth has slowed and you need an outside
                perspective to evaluate the right opportunity to pivot in your
                product or service offerings.
                <br />
                <br />
                Now you need to collaborate with a team that has deep industry
                expertise and can help illuminate new possibilities.
              </div>
              <Link to="/product">
                <div className={styles.learnmore}>learn more</div>
              </Link>
            </div>
          )}
          {pathname !== '/explore' && (
            <div className={styles.block}>
              <div className={styles.title}>Exploratory POC or R&D</div>
              <div className={styles.body}>
                You are an innovation officer and would like to expand market
                share by exploring new channels and revenue sources from ideas
                that are not core to your company’s primary offerings.
                <br />
                <br />
                Now you need a team that has a deep history in working with
                bleeding edge technology to explore new digital frontiers.
              </div>
              <Link to="/explore">
                <div className={styles.learnmore}>learn more</div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChooseInnovation;
