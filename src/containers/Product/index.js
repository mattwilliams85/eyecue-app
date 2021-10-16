import React from 'react';
import { useMediaQuery } from 'react-responsive';

import TopNav from 'components/TopNav';
import Title from 'components/sections/Title';
import Listables from 'components/sections/Listables';
import Showcase from 'components/sections/Showcase';
import Screenshots2 from 'components/sections/Screenshots2';
import Summary from 'components/sections/Summary';
import ChooseInnovation from 'components/sections/ChooseInnovation';
import Contact from 'components/sections/Contact';
import Footer from 'components/Footer';

import TitleBg from 'images/title_bg6.jpg';
import ShowcaseDevice from 'images/laptop_2.png';
import ShowcaseBackground from 'images/texture_bg5.jpg';
import fade from 'images/case-study-main.png';
import page1 from 'images/case-study-sub1.png';
import page2 from 'images/case-study-sub2.png';
import page3 from 'images/case-study-sub3.png';
import { SHOWCASE_COPY } from 'copy';

function Product() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 768px)'
  });
  return (
    <>
      <TopNav />
      <Title
        background={TitleBg}
        topic={'FOR BUSINESS & PRODUCT OWNERS'}
        title={'SEIZE NEW MARKET SEGMENTS'}
        subheader={
          'Build on exiting customer success, and launch into untapped opportunities by capturing the imagination of the new market segment'
        }
      />
      <Listables
        title={'Innovation is a Shortcut to Convert an User into a Champion'}
        copy={SHOWCASE_COPY.listables.product}
        gradient={{
          color1: 'f4d527',
          color2: 'fbaf72'
        }}
      />
      <Showcase
        title={`Making the First-in-Class Upgrades for the First Responders `}
        subheader={`EyeCue consolidates internal legacy data sources and built an Order Management system that truly fit their needs.`}
        background={ShowcaseBackground}
        deviceImg={ShowcaseDevice}
        deviceStyles={
          isDesktop
            ? {
                top: '-70px',
                width: '750px',
                left: '600px',
                maxWidth: '750px'
              }
            : { top: '-310px', width: '500px', left: '0px' }
        }
        copy={SHOWCASE_COPY.showcase.explore}
      />
      <Screenshots2
        body={`EyeCue is my go-to for development projects for the last decade because they are trusted,
        provide fair pricing and their code simply works and scales.`}
        author={'Josh Levine'}
        company={'Knox, Advisor'}
        screenshots={{
          fade,
          page1,
          page2,
          page3
        }}
      />
      <Summary />
      <ChooseInnovation />
      <Contact />
      <Footer />
    </>
  );
}

export default Product;
