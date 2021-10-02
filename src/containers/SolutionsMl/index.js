import React from 'react';
import TopNav from 'components/TopNav';
import Icons from 'components/sections/Icons';
import ImageDetails from 'components/sections/ImageDetails';
import ChooseSolutions from 'components/sections/ChooseSolutions';
import Contact from 'components/sections/Contact';
import Footer from 'components/Footer';

import screenshot1 from 'images/section1-fg.png';
import screenshot2 from 'images/section2-fg.png';
import screenshot3 from 'images/screenshot_8.jpg';

import icon1 from 'images/NLP.svg';
import icon2 from 'images/data_collection.svg';
import icon3 from 'images/computer_vision.svg';
import icon4 from 'images/forecasting_predictions.svg';
import icon5 from 'images/cluster-analysis.svg';
import icon6 from 'images/calculation_engine.svg';

function SolutionsMl() {
  return (
    <>
      <TopNav />
      <Icons
        topic={'Solution Space: AI & ML Applications'}
        header={'Enterprise Grade Intelligence'}
        subheader={`EyeCue builds AI assisted tools to improve productivity by
        presenting meaningful insights that ignite human innovator’s
        creative spark`}
        icons={[
          {
            img: icon1,
            title: 'Natural Language Processing (NLP)',
            copy: 'Tone and sentiment analysis, chat bots development, publication text parsing, etc.'
          },
          {
            img: icon2,
            title: 'Data Collection',
            copy: 'Data scraping and data ingestion from any public source, 3rd party API, etc. through automation'
          },
          {
            img: icon3,
            title: 'Computer Vision',
            copy: 'Text identification, image classification and pattern recognition, video and motion analysis, etc.'
          },
          {
            img: icon4,
            title: 'Forecasting & Predictions',
            copy: 'Risk detection, security management, trend monitoring, data classification, etc.'
          },
          {
            img: icon5,
            title: 'Cluster Analysis',
            copy: 'Similarity or dissimilarity between subject behavior, preferences,  shape and size, categorization, etc.'
          },
          {
            img: icon6,
            title: 'Calculation Engine',
            copy: 'Parallel computing, containerized packages, microservice architecture, etc.'
          }
        ]}
      />
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
        title={'Cluster Analysis + Social Trend Detection'}
        copy={
          'Making relevant recommendation is hard. Using machine learnign methods, EyeCue can identifies micro-niches of similar users based on their tastes and preferences. When one user experiences something positive, the system automatically shares the experience with other people in the same niche.'
        }
      />
      <ChooseSolutions />
      <Contact />
      <Footer />
    </>
  );
}

export default SolutionsMl;
