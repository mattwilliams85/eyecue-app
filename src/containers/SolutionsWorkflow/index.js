import React from 'react';
import TopNav from 'components/TopNav';
import Icons from 'components/sections/Icons';
import ImageDetails from 'components/sections/ImageDetails';
import ChooseSolutions from 'components/sections/ChooseSolutions';
import Contact from 'components/sections/Contact';
import Footer from 'components/Footer';

import screenshot1 from 'images/solutions-workflow-bg1.png';
import screenshot2 from 'images/solutions-workflow-bg2.png';
import screenshot3 from 'images/solutions-workflow-bg3.png';

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
        topic={'SOLUTION SPACE: WORK AUTOMATION'}
        header={'Human Centric Optimization'}
        subheader={`EyeCue redesigns tools to improve accuracy and job satisfaction by automating tedious processes based on pre-defined systems or business rules`}
        icons={[
          {
            img: icon1,
            title: 'Better Approval Cycles',
            copy: 'Use decision tree based notification to monitor job status and escalate necessary actions'
          },
          {
            img: icon2,
            title: 'Promote Satisfacition',
            copy: 'Remove tedious manual tasks and frees human operator for deeper decisions through automation'
          },
          {
            img: icon3,
            title: 'Improve Visibility',
            copy: 'Identify bottlenecks or key contributors to meet your operational or strategic goals'
          },
          {
            img: icon4,
            title: 'Error Prevention',
            copy: 'Provide easy-to-miss intelligence to human operators to reduce possible errors'
          },
          {
            img: icon5,
            title: 'Compliance Adherence',
            copy: 'Meet security and compliance needs by automating audit requests, internal controls, etc.'
          },
          {
            img: icon6,
            title: 'Continual Improvement',
            copy: 'Track effectiveness and weakness of internal workflow to optimize for business goals'
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
