import React from 'react';
import styles from './style.module.scss';

import graph1 from 'images/graph_1.png';
import graph2 from 'images/graph_2.png';
import graph3 from 'images/graph_3.png';

function LeftRightLeft() {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.row}>
          <img src={graph1} alt="venn diagram" className={styles.graph} />
          <div>
            <div className={styles.title}>The Venn Diagram that Works</div>
            <div className={styles.body}>
              EyeCue is a pro when it comes to creating something new. Our team
              continues to accrue the latest product launch trends every year.
              By working with a wide range of industries, this real-world and
              bleeding- edge experience can dramatically increase your product’s
              market adoption and fit no matter what we build together.
              <br />
              <br />
              EyeCue takes pride in delivering immediate value to our clients’
              internal users while keeping an eye on the long-term objectives.
              Without having lengthy vetting and trial process, the EyeCue team
              can start creating what you truly need from day one.
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.middle}>
            <div className={styles.title}>
              Alignment with Your Internal Strength
            </div>
            <div className={styles.body}>
              EyeCue team defines its capabilities by the velocity and the
              impact of value it produces instead of technology stacks. By
              having 20 years of enterprise and startup experience, the EyeCue
              team is ready to design and implement every modern technology
              environment.
              <br />
              <br />
              Our IoT, Data Science, and Artificial Intelligence background
              provide unprecedented support in unlocking the possibility to
              analyze your solution without limitations. It is in the most
              complex and innovative applications where EyeCue’s expertise truly
              shines.
            </div>
          </div>
          <img src={graph2} alt="venn diagram" className={styles.graph} />
        </div>
        <div className={styles.row}>
          <img src={graph3} alt="venn diagram" className={styles.graph} />
          <div>
            <div className={styles.title}>
              End-user Centric Product Development
            </div>
            <div className={styles.body}>
              EyeCue measures the impact of innovation by the scope of the
              problem it addresses and the speed of adoption in the hands of the
              intended users. This is why the EyeCue team collects, plans, and
              delivers new features and requirements based on the feedback from
              you and your users every 2 weeks.
              <br />
              <br />
              This agile product calibration both validates your decisions and
              promotes champions for your product. By having a rapid development
              cycle, you will never have to worry about falling behind your
              competitors for the critical releases.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftRightLeft;
