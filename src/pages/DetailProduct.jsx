/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Card, Row,
} from 'antd';
import 'swiper/css/bundle';

import product from '../product.json';
import ImageSection from '../components/DetailProduct/ImageSection';
import InformationSection from '../components/DetailProduct/InformationSection';

function DetailProduct() {
  const { id: idParams } = useParams();
  const navigate = useNavigate();
  const item = product.find(({ id }) => id === Number(idParams));

  useEffect(() => {
    if (!item) navigate('/page-not-found');
  }, []);

  return (
    <div className="detailProduct__Card">
      <Card type="inner" title="Product Detail" extra={<a href="/">Back</a>} style={{ width: '70%' }}>
        <Row>
          <ImageSection data={{ imageList: item?.images }} />
          <InformationSection data={{ ...item }} />
        </Row>
      </Card>
    </div>
  );
}

export default DetailProduct;
