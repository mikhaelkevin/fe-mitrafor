/* eslint-disable react/no-unstable-nested-components */
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import {
  Button, Input, Space, Table, Typography,
} from 'antd';

import product from '../product.json';

function Home() {
  const navigate = useNavigate();
  const { Title } = Typography;

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys, selectedKeys, confirm, clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button type="primary" onClick={() => handleSearch(selectedKeys, confirm, dataIndex)} icon={<SearchOutlined />} size="small" style={{ width: 90 }}>
            Search
          </Button>
          <Button onClick={() => clearFilters && handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),

    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),

    onFilter: (value, record) => record[dataIndex].toString()
      .toLowerCase()
      .includes(value.toLowerCase()),

    onFilterDropdownOpenChange: (visible) => visible
    && setTimeout(() => searchInput.current?.select(), 100),

    render: (text) => (searchedColumn === dataIndex ? (
      <Highlighter highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }} searchWords={[searchText]} autoEscape textToHighlight={text ? text.toString() : ''} />
    ) : (
      text
    )),
  });

  const columns = [{
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    ...getColumnSearchProps('title'),
  },
  {
    title: 'Brand',
    dataIndex: 'brand',
    key: 'brand',
  },
  {
    title: 'Stock',
    dataIndex: 'stock',
    key: 'stock',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
    key: 'rating',
  }];

  return (
    <div className="home__productTable">
      <Title>Product List</Title>
      <Table
        dataSource={product}
        columns={columns}
        rowKey="id"
        onRow={(({ id }) => ({
          onClick: () => navigate(`/product/${id}`),
        }))}
      />
    </div>
  );
}

export default Home;
