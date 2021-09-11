import React from 'react';
import styles from './style.module.scss';

function Listables({ title, copy, gradient = {} }) {
  function createMarkup(message) {
    return { __html: message };
  }

  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.main}>
          <div className={styles.summary}>
            <div
              className={styles.title}
              style={{
                backgroundImage: `linear-gradient(0deg, #${gradient.color1}, #${gradient.color2} 90%)`
              }}
            >
              {title}
            </div>
            <div
              className={styles.body}
              dangerouslySetInnerHTML={createMarkup(copy.copy)}
            ></div>
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
              <div className={styles.header}>Support</div>
              <ul>
                <li>Produt & Project Management</li>
                <li>Usability Testing</li>
                <li>User Experience Design</li>
                <li>User Acquisition Strategy</li>
                <li>Data Science</li>
                <li>Quality Assurance</li>
                <li>Post-MVP maintenance</li>
                <li>Post-MVP Project Offboarding</li>
              </ul>
            </div>
            <div className={styles.list}>
              <div className={styles.header}>Deliverables</div>
              <ul>
                <li>Enterprise SaaS Apps</li>
                <li>Multi-tier Marketplace</li>
                <li>AI-assisted Apps</li>
                <li>Workflow Automation Apps</li>
                <li>Data Science Framework</li>
                <li>IoT & IoT Middle-ware</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listables;
