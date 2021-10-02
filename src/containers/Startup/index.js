import React from 'react';
import TopNav from 'components/TopNav';
import Title from 'components/sections/Title';
import Listables from 'components/sections/Listables';
import Showcase from 'components/sections/Showcase';
import Screenshots from 'components/sections/Screenshots';
import Summary from 'components/sections/Summary';
import ChooseInnovation from 'components/sections/ChooseInnovation';
import Contact from 'components/sections/Contact';
import Footer from 'components/Footer';

import TopNavBg from 'images/title_bg1.jpg';
import ShowcaseDevice from 'images/tablet_1.png';
import ShowcaseBackground from 'images/texture_bg4.jpg';
import { SHOWCASE_COPY } from 'copy';

function Startup() {
  return (
    <>
      <TopNav />
      <Title
        background={TopNavBg}
        topic={'For Angel-backend Startups'}
        title={'100% Coverage from Concept to Launch'}
        subheader={`Whether it’s usability/design guidance for tech founders, or a
          complete launch solution for non-tech founders, we’ve got you
          covered.`}
      />
      <Listables
        copy={SHOWCASE_COPY.listables.startup}
        title={
          'A Successful Startup Team is Far More than the Sum of its Parts'
        }
        gradient={{
          color1: '5c96d8',
          color2: '595cc5'
        }}
      />
      <Showcase
        title={`How EyeCue Takes Powur from $0 to $400 Million`}
        subheader={`How one partnership preservered to overcame the initial bias and
        won over future customers and investors.`}
        background={ShowcaseBackground}
        deviceImg={ShowcaseDevice}
        copy={SHOWCASE_COPY.showcase.startup}
      />
      <Screenshots />
      <Summary />
      <ChooseInnovation />
      <Contact />
      <Footer />
    </>
  );
}

export default Startup;
