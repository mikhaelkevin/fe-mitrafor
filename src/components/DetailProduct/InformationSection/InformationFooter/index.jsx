import React from 'react';
import PropTypes from 'prop-types';
import FooterItem from './FooterItem';

function InformationFooter({ data: { price, discountPercentage: discount, stock } }) {
  return (
    <>
      <FooterItem data={{ title: 'Price', item: price }} />
      <FooterItem data={{ title: 'Discount', item: discount }} />
      <FooterItem data={{ title: 'Stock', item: stock }} />
    </>
  );
}

InformationFooter.propTypes = {
  data: PropTypes.shape({
    price: PropTypes.number.isRequired,
    discountPercentage: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
};

export default InformationFooter;
