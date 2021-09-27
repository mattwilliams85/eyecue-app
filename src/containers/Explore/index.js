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

import TitleBg from 'images/title_bg5.jpg';
import ShowcaseDevice from 'images/tablet_2.png';
import ShowcaseBackground from 'images/poc-bg.jpg';
import fade from 'images/poc-study-main.png';
import page1 from 'images/poc-study-sub1.png';
import page2 from 'images/poc-study-sub2.png';
import page3 from 'images/poc-study-sub3.png';
import quoteBackground from 'images/poc-study-quote-bg.png';
import { SHOWCASE_COPY } from 'copy';

function Explore() {
  return (
    <>
      <TopNav />
      <Title
        background={TitleBg}
        topic={'FOR INNOVATION DIRECTORS & OFFICERS'}
        title={'Pioneer New Industry Standards'}
        subheader={
          'Push the boundaries of your industry by ushering new innovation using Data Science, Artificial Intelligence, and IoT.'
        }
      />
      <Listables
        title={'Start a Relationship with Your Future Target Market, Now'}
        copy={SHOWCASE_COPY.listables.explore}
        gradient={{
          color1: 'ee5ca4',
          color2: 'f49e38'
        }}
      />
      <Showcase
        title={`How AI reduced Research Time from 2 Years to 20 seconds`}
        subheader={`EyeCue transforms years of scientific research experience into seconds with artificial intelligence.`}
        background={ShowcaseBackground}
        deviceImg={ShowcaseDevice}
        deviceStyles={{
          top: '-150px',
          width: '550px',
          left: '750px'
        }}
        deviceTop={'-130px'}
        copy={SHOWCASE_COPY.showcase.explore}
      />
      <Screenshots2
        author={'Howie Seay'}
        company={'BD, Senior Product Manager'}
        quoteBackground={quoteBackground}
        screenshots={{
          fade,
          page1,
          page2,
          page3
        }}
      />
      <Summary />
      <Choose />
      <Contact />
      <Footer />
    </>
  );
}

export default Explore;
