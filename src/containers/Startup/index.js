import React from 'react';
import TopNav from 'components/TopNav';
import Title from 'components/sections/Title';
import Listables from 'components/sections/Listables';
import Showcase from 'components/sections/Showcase';
import Summary from 'components/sections/Summary';
import Logos from 'components/sections/Logos';
import Contact from 'components/sections/Contact';
import Footer from 'components/Footer';

function Startup() {
  return (
    <>
      <TopNav />
      <Title />
      <Listables />
      <Showcase />
      <Summary />
      <Logos />
      <Contact />
      <Footer />
    </>
  );
}

export default Startup;
