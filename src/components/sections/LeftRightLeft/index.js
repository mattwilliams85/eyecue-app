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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tempus iaculis sapien, id pulvinar arcu sodales blandit. Maecenas
              ut nibh tristique nunc lobortis ultrices.
              <br />
              <br />
              Curabitur vel tincidunt quam. Vestibulum non tellus varius,
              ullamcorper diam et, tincidunt lectus. Nulla interdum nisi
              pretium, rutrum leo id, sodales turpis. Duis vestibulum sodales
              nisi, in vulputate mauris sagittis nec. Maecenas interdum nec ante
              sit amet fermentum.
              <br />
              <br />
              Phasellus quis enim id turpis maximus viverra ac eget leo. Mauris
              eget maximus ligula, at porta ex. Vivamus justo quam, molestie
              eget tempor quis, fermentum vel nisl. Curabitur sed odio leo.
              Suspendisse aliquet sit amet nisi sed iaculis.
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.middle}>
            <div className={styles.title}>
              Alignment with Your Internal Strength
            </div>
            <div className={styles.body}>
              Nulla ullamcorper, leo vitae efficitur sodales, mi risus venenatis
              nisi, in varius purus quam nec lacus. Interdum et malesuada fames
              ac ante ipsum primis in faucibus. Curabitur vel tincidunt turpis,
              vehicula fringilla dui.
              <br />
              <br />
              Morbi dignissim hendrerit tristique. Mauris consequat enim quis
              arcu suscipit faucibus. Ut ut neque eget neque egestas pretium non
              accumsan magna. Cras maximus orci eu augue luctus commodo.
              <br />
              <br />
              Mauris pulvinar viverra convallis. Nunc eu ornare ante. In nisl
              lorem, dignissim eget lorem et, dapibus consequat sem.
            </div>
          </div>
          <img src={graph2} alt="venn diagram" className={styles.graph} />
        </div>
        <div className={styles.row}>
          <img src={graph3} alt="venn diagram" className={styles.graph} />
          <div>
            <div className={styles.title}>
              End-user Centric Product Development
            </div>
            <div className={styles.body}>
              Sed efficitur, lectus ut condimentum finibus, erat orci cursus
              libero, eu efficitur tortor ligula ac leo. Maecenas viverra enim
              eget lorem porta, eget lacinia turpis feugiat.
              <br />
              <br />
              Aliquam erat purus, pharetra in eleifend commodo, auctor dignissim
              est. Nam ultrices pulvinar nulla quis ultrices. Integer aliquet
              imperdiet ex, nec tempus sapien vestibulum eget.
              <br />
              <br />
              Fusce eu condimentum nunc, vel iaculis mi. Phasellus aliquam a
              velit in feugiat. Sed fringilla, lorem ac hendrerit porttitor,
              nisi mi ullamcorper ligula, sed cursus ligula tellus vel tortor.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftRightLeft;
