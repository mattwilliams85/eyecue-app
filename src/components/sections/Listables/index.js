import React from 'react';
import styles from './style.module.scss';

function Listables() {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.main}>
          <div className={styles.summary}>
            <div className={styles.title}>
              A Successful Startup Team is Far More than the Sum of its Parts
            </div>
            <div className={styles.body}>
              Seasoned serial entrepreneurs always recruit the same people time
              and time again to recreate that same magic.
              <br />
              <br />
              Over the last 8 years, EyeCue’s entrepreneur-first culture has
              fostered the perfect environment to incubate innovation teams that
              embody this very unique startup spark, and has consistently
              launched some of the most successful startups.
              <br />
              <br />
              The key ingredient to unlocking the explosive excitment and
              progress in early startup phase lies in this perfect alignment of
              experience, personality and capabilities amongst the core members
              of your team.
            </div>
          </div>
          <div className={styles.listWrapper}>
            <div className={styles.list}>
              <div className={styles.header}>Capabilities</div>
              <ul>
                <li>Web/Responsive Development</li>
                <li>Native Mobile Development</li>
                <li>Blockchains Application Development</li>
                <li>Cloud Deployment</li>
                <li>Kubernetes / Deployment Automation</li>
                <li>Microservices Architecture</li>
                <li>API-First Design</li>
                <li>Data Security</li>
                <li>Data Compliance </li>
              </ul>
            </div>
            <div className={styles.list}>
              <div className={styles.header}>Capabilities</div>
              <ul>
                <li>Web/Responsive Development</li>
                <li>Native Mobile Development</li>
                <li>Blockchains Application Development</li>
                <li>Cloud Deployment</li>
                <li>Kubernetes / Deployment Automation</li>
                <li>Microservices Architecture</li>
                <li>API-First Design</li>
                <li>Data Security</li>
                <li>Data Compliance </li>
              </ul>
            </div>
            <div className={styles.list}>
              <div className={styles.header}>Capabilities</div>
              <ul>
                <li>Web/Responsive Development</li>
                <li>Native Mobile Development</li>
                <li>Blockchains Application Development</li>
                <li>Cloud Deployment</li>
                <li>Kubernetes / Deployment Automation</li>
                <li>Microservices Architecture</li>
                <li>API-First Design</li>
                <li>Data Security</li>
                <li>Data Compliance </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listables;
