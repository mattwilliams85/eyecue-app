import React from 'react';
import styles from './style.module.scss';
import deviceBd from 'images/device-bd.png';
import devicePowur from 'images/device-powur.png';
import deviceFlowjo from 'images/device-flowjo.png';

function Cards() {
  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <div className={styles.layout}>
        <div className={styles.topic}>case studies</div>
        <div className={styles.header}>
          Connect the Dots Between Usability & Technology
        </div>
        <div className={styles.subheader}>
          See how we leverage AI, digital product development and user-first
          design to transform how these industries work.
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={deviceBd} alt="device-bd" />
            <div className={styles.group}>
              <div className={styles.company}>BD | AI, Data Science</div>
              <div className={styles.subject}>
                AI-accelerated vaccine research
              </div>
              <div className={styles.button}>Learn More</div>
            </div>
          </div>
          <div className={styles.card}>
            <img src={devicePowur} alt="device-powur" />
            <div className={styles.group}>
              <div className={styles.company}>
                Powur | Marketplace, Automation
              </div>
              <div className={styles.subject}>
                Automation that 100x the valuation
              </div>
              <div className={styles.button}>Learn More</div>
            </div>
          </div>
          <div className={styles.card}>
            <img src={deviceFlowjo} alt="device-flowjo" />
            <div className={styles.group}>
              <div className={styles.company}>
                FlowJo | Order Management, ERP
              </div>
              <div className={styles.subject}>
                When Salesforce is not good enough
              </div>
              <div className={styles.button}>Learn More</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
