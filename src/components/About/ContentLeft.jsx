import React from 'react';
import { Col, Row, Typography } from 'antd';

import PropTypes from 'prop-types';

function ContentLeft({ children, image, title }) {
  const { Title } = Typography;
  return (
    <section>
      <Row className="section__contentLeft">
        <Col xl={10} className="__aboutImage">
          <Title>{title}</Title>
          <img src={image} alt="sectionTwoImage" />
        </Col>
        <Col xl={12} style={{ display: 'flex', alignItems: 'center' }}>
          {children}
        </Col>
      </Row>
    </section>
  );
}

ContentLeft.propTypes = {
  children: PropTypes.element.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ContentLeft;
