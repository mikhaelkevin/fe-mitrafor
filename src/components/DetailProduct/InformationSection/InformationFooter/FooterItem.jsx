import React from 'react';
import {
  Col, Typography,
} from 'antd';

import PropTypes from 'prop-types';

function FooterItem({ data: { title, item } }) {
  const { Title } = Typography;
  return (
    <Col sm={8}>
      <Title level={4}>
        {title}
      </Title>
      <Title level={3} style={{ margin: '0' }}>{item}</Title>
    </Col>
  );
}

FooterItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    item: PropTypes.number.isRequired,
  }).isRequired,
};

export default FooterItem;
