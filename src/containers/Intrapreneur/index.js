import React from 'react';
import TopNav from 'components/TopNav';
import Title from 'components/sections/Title';
import Listables from 'components/sections/Listables';
import Showcase from 'components/sections/Showcase';
import Screenshots2 from 'components/sections/Screenshots2';
import Summary from 'components/sections/Summary';
import Choose from 'components/sections/Choose';
import Contact from 'components/sections/Contact';
import Footer from 'components/Footer';

import TitleBg from 'images/title_bg2.jpg';
import ShowcaseDevice from 'images/laptop_1.png';
import ShowcaseBackground from 'images/case-study-bg.jpg';
import QuoteBackground from 'images/case-study-quote-bg.png';
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
        copy={SHOWCASE_COPY.listables.intrapreneur}
        gradient={{
          color1: '55e0a0',
          color2: '2db8bd'
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
        copy={SHOWCASE_COPY.showcase.intrapreneur}
      />
      <Screenshots2
        author={'James Kidwell'}
        company={'FlowJo, Director of Sales'}
        quoteBackground={QuoteBackground}
      />
      <Summary />
      <Choose />
      <Contact />
      <Footer />
    </>
  );
}

export default Intrapreneur;
