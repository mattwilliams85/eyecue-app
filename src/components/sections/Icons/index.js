import React from 'react';
import styles from './style.module.scss';
import classnames from 'classnames';

import iconNlp from 'images/NLP.svg';
import iconData from 'images/data_collection.svg';
import iconVision from 'images/computer_vision.svg';
import iconForecast from 'images/forecasting_predictions.svg';
import iconCluster from 'images/cluster-analysis.svg';
import iconCalculation from 'images/calculation_engine.svg';

function Logos({ withPadding }) {
  return (
    <div
      className={classnames(styles.container, {
        [styles.withPadding]: withPadding
      })}
    >
      <div className={styles.layout}>
        <div>
          <div className={styles.topic}>
            Solution Space: AI & ML Applications
          </div>
          <div className={classnames(styles.header, styles.gradient)}>
            Enterprise Grade Intelligence
          </div>
          <div className={classnames(styles.subheader, styles.gradient)}>
            EyeCue builds AI assisted tools to improve productivity by
            presenting meaningful insights that ignite human innovator’s
            creative spark
          </div>
        </div>
        <div className={styles.icons}>
          <div className={styles.iconGroup}>
            <img src={iconNlp} alt={'logo-google'} />
            <div className={classnames(styles.label, styles.gradient)}>
              Natural Language Processing (NLP)
            </div>
            <div className={styles.description}>
              Tone and sentiment analysis, chat bots development, publication
              text parsing, etc.
            </div>
          </div>
          <div className={styles.iconGroup}>
            <img src={iconData} alt={'logo-google'} />
            <div className={classnames(styles.label, styles.gradient)}>
              Data Collection
            </div>
            <div className={styles.description}>
              Data scraping and data ingestion from any public source, 3rd party
              API, etc. through automation
            </div>
          </div>
          <div className={styles.iconGroup}>
            <img src={iconVision} alt={'logo-google'} />
            <div className={classnames(styles.label, styles.gradient)}>
              Computer Vision
            </div>
            <div className={styles.description}>
              Text identification, image classification and pattern recognition,
              video and motion analysis, etc.
            </div>
          </div>
          <div className={styles.iconGroup}>
            <img src={iconForecast} alt={'logo-google'} />
            <div className={classnames(styles.label, styles.gradient)}>
              Forecasting & Predictions
            </div>
            <div className={styles.description}>
              Risk detection, security management, trend monitoring, data
              classification, etc.
            </div>
          </div>
          <div className={styles.iconGroup}>
            <img src={iconCluster} alt={'logo-google'} />
            <div className={classnames(styles.label, styles.gradient)}>
              Cluster Analysis
            </div>
            <div className={styles.description}>
              Similarity or dissimilarity between subject behavior, preferences,
              shape and size, categorization, etc.
            </div>
          </div>
          <div className={styles.iconGroup}>
            <img src={iconCalculation} alt={'logo-google'} />
            <div className={classnames(styles.label, styles.gradient)}>
              Calculation Engine
            </div>
            <div className={styles.description}>
              Parallel computing, containerized packages, microservice
              architecture, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logos;
