import React from 'react';
import PropTypes from 'prop-types';
import {
  Col, Row, Typography,
} from 'antd';
import InformationHead from './InformationHead';
import InformationFooter from './InformationFooter';

function InformationSection({ data }) {
  const { Title } = Typography;
  const {
    title, brand, rating, description, price, discountPercentage, stock,
  } = data;

  return (
    <Col xl={12} sm={24} style={{ paddingLeft: '1rem' }}>
      <InformationHead data={{ title, brand, rating }} />
      <Title level={4}>
        Description
        <p>{description}</p>
      </Title>
      <Row style={{ marginTop: '2rem', textAlign: 'center' }}>
        <InformationFooter data={{ price, discountPercentage, stock }} />
      </Row>
    </Col>
  );
}

InformationSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    brand: PropTypes.string,
    description: PropTypes.string,
    discountPercentage: PropTypes.number,
    price: PropTypes.number,
    rating: PropTypes.number,
    stock: PropTypes.number,
  }),
};

InformationSection.defaultProps = {
  data: {
    title: 'Unknown Title',
    brand: 'Unkown brand',
    description: 'No Description',
    discountPercentage: 0,
    price: 0,
    rating: 0,
    stock: 0,
  },
};

export default InformationSection;
