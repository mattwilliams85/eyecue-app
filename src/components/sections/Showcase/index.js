import React from 'react';
import styles from './style.module.scss';

function Showcase() {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.titleWrap}>
          <div className={styles.topic}>Case Study</div>
          <div className={styles.title}>
            How EyeCue Takes Powur from $0 to $400 Million
          </div>
          <div className={styles.subheader}>
            How one partnership preservered to overcame the initial bias and won
            over future customers and investors
          </div>
        </div>
        <div className={styles.bodyWrap}>
          <div>
            Powur is the first entrepreneurial platform for solar energy. It
            empowers individuals to create a business in solar from the palm of
            their hand. The vision is to put solar panels on 2,000,000 homes by
            2025.
            <br />
            <br />
            Powur was founded by individuals with a deep history in direct
            sales, technology and giving back. EyeCue as their dedicated
            technology team has participated in the evolution of the product
            from ideation through inception, and on through launch; providing
            branding, user experience, server and mobile side development via
            product expertise and innovative thought.
            <br /> <br />
            Today, Powur is a consortium of solar installers, manufacturers,
            financiers, and entrepreneurs who seek to bring the best-of-breed
            products and services to the end consumer.
          </div>
          <div>
            Donec accumsan est vel eros egestas pharetra. Donec eu tellus metus.
            Vestibulum sollicitudin quis lorem rutrum imperdiet. Mauris eu
            venenatis nibh.
            <br />
            <br />
            Aliquam et nunc at erat fringilla porttitor eu ut magna.
            Pellentesque arcu tellus, commodo at augue ac, accumsan laoreet
            metus. Cras eget magna nec est hendrerit hendrerit. Quisque justo
            lectus, ultrices eu mattis vel, scelerisque vitae lectus. Nulla
            facilisi.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            sollicitudin consectetur erat, in imperdiet ante mollis vel.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras
            lacinia mattis odio nec accumsan.
          </div>
          <div>
            Vivamus arcu ex, lacinia eu convallis vitae, sodales ut dui. Sed et
            justo eu velit dignissim congue. Nam vulputate tincidunt lorem vel
            lacinia. Mauris enim metus, porta at posuere posuere, suscipit vitae
            risus. Aliquam id leo vestibulum magna elementum fermentum et vel
            ipsum. Etiam tempor arcu quis rutrum lobortis.
            <br />
            <br />
            Integer pellentesque est mi, non aliquam ipsum tempus commodo. Veros
            a magna imperdiet rutrum.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
