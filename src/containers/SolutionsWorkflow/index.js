import React from 'react';
import TopNav from 'components/TopNav';
import Icons from 'components/sections/Icons';
import ImageDetails from 'components/sections/ImageDetails';
import Logos from 'components/sections/Logos';
import Contact from 'components/sections/Contact';
import Footer from 'components/Footer';

import screenshot1 from 'images/solutions-workflow-bg1.png';
import screenshot2 from 'images/solutions-workflow-bg2.png';
import screenshot3 from 'images/solutions-workflow-bg3.png';

import icon1 from 'images/approval.svg';
import icon2 from 'images/satisfaction.svg';
import icon3 from 'images/visibility.svg';
import icon4 from 'images/error_prevention.svg';
import icon5 from 'images/compliance.svg';
import icon6 from 'images/improvement.svg';

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
        title={'Eliminate manual scheduling complexity'}
        copy={
          'The EyeCue team translates the highly intensive human scheduling and logging tasks into an automated workflow to modernize one of the oldest gig-economy, construction flagging. Like Uber and Doordash, workers may now answer to a job automatically determined by hours, certifications, and seniority.'
        }
      />
      <ImageDetails
        image={screenshot2}
        title={'Expedite scientific research with workflow automation'}
        isImageRight
        copy={
          'Experimental design can be challenging. From designing a panel to coordinating with colleagues, from finding old data to re-entering the same information in multiple systems, the process of generating high-quality results can be time-consuming. The EyeCue team deploys workflow automation to guide data collection, manage lab equipment connection, and help step through analysis.'
        }
        backgroundColor={'white'}
      />
      <ImageDetails
        image={screenshot3}
        title={'Optimize sales without scaling the manual labor'}
        copy={
          'In a niche marketplace where sellers act as a network to fulfill the diverse needs of buyers, the EyeCue team introduces a portal that distills the noise of manual tracking into a stage-based fulfillment workflow platform. Not only does it consolidates complex multi-tiered communication, but it also empowered sellers to do what they couldn’t before - provide better services to their customers without needing to scale up more human operators.'
        }
      />
      <Logos withPadding />
      <Contact />
      <Footer />
    </>
  );
}

export default SolutionsMl;
