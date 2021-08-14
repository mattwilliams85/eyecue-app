import React from 'react';
import styles from './style.module.scss';

function Summary() {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.block}>
          <div className={styles.topic}>eyecue promises</div>
          <div className={styles.header}>Design & Development Excellence</div>
          <div className={styles.body}>
            EyeCue is not an agency, but we believe in the process and rigor.
          </div>
          <div className={styles.body}>
            Design and development are table stakes for working with startups.
            We're committed to using those disciplines along with our 15 years
            of product development experience to focus on your product. Whatever
            it takes, the success of the product comes first.
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.header}>We Bet on Our Clients’ Success</div>
          <div className={styles.body}>
            EyeCue is not an incubator, but we invest in over 60% of our
            clients.
          </div>
          <div className={styles.body}>
            For first-time entrepreneurs, this means equity for development and
            helping build in-house teams when the time is right. For an
            enterprise, this is shared investment in strategic initiatives or
            product-based revenue sharing.
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.header}>Build Trust, Not Contracts</div>
          <div className={styles.body}>
            EyeCue is not a typical tech vendor. We don’t believe in the
            waterfall project management style.
          </div>
          <div className={styles.body}>
            This is why you will never need to sign a long term contract. After
            our initial discovery, we will provide you with a rough estimate on
            the effort and features that we recommend. After that, we only
            charge for one 2-week sprint at a time. It’s up to the quality of
            our work to keep you as a client.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
