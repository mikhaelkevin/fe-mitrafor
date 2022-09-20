import React from 'react';
import PropTypes from 'prop-types';
import {
  Col, Row, Typography,
} from 'antd';

function InformationHead({ data: { title, brand, rating } }) {
  const { Title } = Typography;

  return (
    <Row style={{ marginTop: '0.5vh' }}>
      <Col sm={18} lg={16} md={15}>
        <Title level={2} style={{ margin: '0' }}>
          {title}
          <p className="ant-typography ant-typography-secondary">{brand}</p>
        </Title>
      </Col>
      <Col sm={6} lg={8} md={9} style={{ textAlign: 'center' }}>
        <Title level={2}>
          Rating
        </Title>
        <Title level={3} style={{ margin: '0' }}>{rating}</Title>
      </Col>
    </Row>
  );
}

InformationHead.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default InformationHead;
