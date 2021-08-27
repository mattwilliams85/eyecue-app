import React from 'react';
import TopNav from 'components/TopNav';
import Title from 'components/sections/Title';
import Listables from 'components/sections/Listables';
import Showcase from 'components/sections/Showcase';
import Screenshots2 from 'components/sections/Screenshots2';
import Summary from 'components/sections/Summary';
import Logos from 'components/sections/Logos';
import Contact from 'components/sections/Contact';
import Footer from 'components/Footer';

import TitleBg from 'images/title_bg2.jpg';
import ShowcaseDevice from 'images/laptop_1.png';
import ShowcaseBackground from 'images/texture_bg5.png';
import { SHOWCASE_COPY } from 'copy';

function Intrapreneur() {
  return (
    <>
      <TopNav />
      <Title
        background={TitleBg}
        topic={'For Enterprise Intrapreneurs'}
        title={'Take Your Productivity to New Heights'}
        subheader={
          'Unify all data sources, automate internal workflow, eliminate human error, and maximize your realtime output.'
        }
      />
      <Listables
        title={'The longer you wait to modernize your tools, the worse it gets'}
        gradient={{
          color1: 'edc97c',
          color2: 'f7db41'
        }}
      />
      <Showcase
        title={`When Salesforce Clone Just Isn't Good Enough`}
        subheader={`How one indsutry leader consolidate internal legacy data sources and built an Order Management system that truly fit their needs.`}
        background={ShowcaseBackground}
        deviceImg={ShowcaseDevice}
        deviceStyles={{
          top: '-130px',
          width: '750px',
          left: '550px'
        }}
        deviceTop={'-130px'}
        darkMode
        copy={SHOWCASE_COPY.intrapreneur}
      />
      <Screenshots2 />
      <Summary />
      <Logos withPadding />
      <Contact />
      <Footer />
    </>
  );
}

export default Intrapreneur;
