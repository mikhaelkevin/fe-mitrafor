import React from 'react';
import PropTypes from 'prop-types';

import { Col } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper';

import defaultImage from '../../assets/image_not_supported.svg';

function ImageSection({ data: { imageList } }) {
  return (
    <Col xl={12} sm={24} style={{ height: '35vh' }}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {imageList?.map((value, index) => (
          <SwiperSlide key={`slider${index + 1}`}>
            <img src={value} alt={`slider${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Col>
  );
}

ImageSection.propTypes = {
  data: PropTypes.shape({
    imageList: PropTypes.arrayOf(PropTypes.string),
  }),
};

ImageSection.defaultProps = {
  data: {
    imageList: [defaultImage],
  },
};

export default ImageSection;
