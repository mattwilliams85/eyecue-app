import React from 'react';
import TopNav from 'components/TopNav';
import Icons from 'components/sections/Icons';
import ImageDetails from 'components/sections/ImageDetails';
import Logos from 'components/sections/Logos';
import Contact from 'components/sections/Contact';
import Footer from 'components/Footer';

import screenshot1 from 'images/solutions-partnership-bg1.jpg';
import icon1 from 'images/data_compliance.svg';
import icon2 from 'images/discovery.svg';
import icon3 from 'images/iot.svg';
import icon4 from 'images/ux.svg';
import icon5 from 'images/architecture.svg';
import icon6 from 'images/staff_augmentation.svg';

function SolutionsPartnership() {
  return (
    <>
      <TopNav />
      <Icons
        topic={'SOLUTION SPACE: STRATEGIC PARTNERSHIP'}
        header={'Benefit From Our Experience'}
        subheader={
          'The EyeCue team evaluates your product needs holistically. We’ve found that our knowledge and services  in these areas have helped tremendously in reducing the barriers to meet our clients’ innovation goals.'
        }
        icons={[
          {
            img: icon1,
            title: 'Data Compliance',
            copy: 'Ensure regulatory compliance in data collection, organization, storage, and privacy'
          },
          {
            img: icon2,
            title: 'Product Discovery',
            copy: 'Ideate and formulate initial product design, feature roadmap, launch timeline and  budget '
          },
          {
            img: icon3,
            title: 'End-to-end IoT Prototypes',
            copy: 'In addition to software development, we design with latest 3D printing to house hardware and sensors'
          },
          {
            img: icon4,
            title: 'UX Optimization',
            copy: 'Brand refresh and experience design. Interactive prototyping, user testing and interviews'
          },
          {
            img: icon5,
            title: 'Architectue Consultation',
            copy: 'Audit your technological strengths, weakness, opprotunities before investing in innovation'
          },
          {
            img: icon6,
            title: 'Staff Augmentation',
            copy: 'Ready-made innovation team that reduces time on recruitment and infrastructural investment'
          }
        ]}
      />
      <ImageDetails
        large
        image={screenshot1}
        title={"Not Sure Where to Start? Let's Discover Your Product Together"}
        copy={`Everything has a beginning. EyeCue’s Discovery process is designed to distill concepts and ideas into implementable visions. We can start by:
          <br><br>
          <dl>
            <li classname="li">Define the main problems and objectives</li>
            <li classname="li">Establish opportunities and benchmarks</li>
            <li classname="li">Identify the core audience and persona for the intended application</li>
            <li classname="li">Explore technology and resource requirements and understand the initial scope</li>
          </dl>
          `}
      />
      <Logos withPadding />
      <Contact />
      <Footer />
    </>
  );
}

export default SolutionsPartnership;
