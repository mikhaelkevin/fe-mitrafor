import React from 'react';
import { Typography } from 'antd';

import PNFImage from '../assets/page-not-found.svg';

const { Title } = Typography;

function PageNotFound() {
  return (
    <div className="__pageNotFound">
      <img src={PNFImage} alt="page-not-found-img" />
      <Title>Oops, page not found! </Title>
    </div>
  );
}

export default PageNotFound;
