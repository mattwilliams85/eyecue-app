import React from 'react';
import TopNav from 'components/TopNav';
import Title from 'components/sections/Title';
import LeftRightLeft from 'components/sections/LeftRightLeft';
import Summary from 'components/sections/Summary';
import Contact from 'components/sections/Contact';
import Footer from 'components/Footer';

import TopNavBg from 'images/title_bg3.jpg';

function Startup() {
  return (
    <>
      <TopNav />
      <Title
        background={TopNavBg}
        topic={'Eyecue Process'}
        title={'Make Good Things Even Better'}
        subheader={`Whether it’s usability/design guidance for tech founders, or a complete launch
          solution for non-tech founders, we’ve got you covered.`}
      />
      <LeftRightLeft />
      <Summary backgroundColor={'efefef'} />
      <Contact />
      <Footer />
    </>
  );
}

export default Startup;
