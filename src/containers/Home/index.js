import React from 'react';
import TopNav from 'components/TopNav';
import Intro from 'components/sections/Intro';
import Logos from 'components/sections/Logos';
import Cards from 'components/sections/Cards';
import Summary from 'components/sections/Summary';
import Choose from 'components/sections/Choose';
import Contact from 'components/sections/Contact';
import Footer from 'components/Footer';

function Home() {
  return (
    <>
      <TopNav />
      <Intro />
      <Logos />
      <Cards />
      <Summary backgroundColor={'f7f9fc'} />
      <Choose />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
