import { Typography } from 'antd';
import React from 'react';
import sectionOneImage from '../assets/section-1.svg';
import sectionTwoImage from '../assets/delivery.svg';
import ContentRight from '../components/About/ContentRight';
import ContentLeft from '../components/About/ContentLeft';

function About() {
  const { Title } = Typography;
  return (
    <div className="__about">
      <ContentRight image={sectionOneImage} title="About Us">
        <Title level={3}>
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.&quot;
        </Title>
      </ContentRight>
      <ContentLeft image={sectionTwoImage} title="Why Us?">
        <Title level={3}>
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.&quot;
        </Title>
      </ContentLeft>
    </div>
  );
}

export default About;
