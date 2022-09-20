import React from 'react';
import { Col, Row, Typography } from 'antd';

import PropTypes from 'prop-types';

function ContentRight({ children, image, title }) {
  const { Title } = Typography;
  return (
    <section className="section__contentRight">
      <Row>
        <Col xl={10} className="__aboutImage">
          <Title level={1}>{title}</Title>
          <img src={image} alt={image} />
        </Col>
        <Col xl={12} style={{ display: 'flex', alignItems: 'center' }}>
          {children}
        </Col>
      </Row>
    </section>
  );
}

ContentRight.propTypes = {
  children: PropTypes.element.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ContentRight;
