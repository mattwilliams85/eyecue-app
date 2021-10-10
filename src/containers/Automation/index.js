import React from 'react';
import TopNav from 'components/TopNav';
import Icons from 'components/sections/Icons';
import ImageDetails from 'components/sections/ImageDetails';
import Logos from 'components/sections/Logos';
import Contact from 'components/sections/Contact';
import Footer from 'components/Footer';

import screenshot1 from 'images/section1-fg.png';
import screenshot2 from 'images/section2-fg.png';
import screenshot3 from 'images/screenshot_8.jpg';

function Automation() {
  return (
    <>
      <TopNav />
      <Icons />
      <ImageDetails
        image={screenshot1}
        title={'Natural Language + Robotic Processing Automation'}
        copy={
          'To create an AI-assisted tool that can summarize over 32 million publications into a human-digestable search space, the EyeCue team deploys Robotic Automation Processing to extract the text and Natural Language Processing to detect the intent of each publication.'
        }
      />
      <ImageDetails
        image={screenshot2}
        title={'Computer Vison + Prediction Model'}
        isImageRight
        copy={
          'To expedite solar panel instllation process, the EyeCue team implements computer vision to detect roof structure, inclination, and extract roof areas from aerial satellite images. By collecting the cost of labor and installation and the utility consumption pattern from the homeowners, the application also creates a 10, 15, 20, and 25-year statistical forecast to illustrate the long-term economical impact of the installation'
        }
        backgroundColor={'white'}
      />
      <ImageDetails
        image={screenshot3}
        title={'Cluster Analysis + Social Trend Detection'}
        copy={
          'Making relevant recommendation is hard. Using machine learnign methods, EyeCue can identifies micro-niches of similar users based on their tastes and preferences. When one user experiences something positive, the system automatically shares the experience with other people in the same niche.'
        }
      />
      <Logos />
      <Contact />
      <Footer />
    </>
  );
}

export default Automation;
