import React from 'react';

import { Menu } from 'antd';
import { HomeOutlined, ProfileOutlined, ContactsOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const menuItems = [{ label: 'Home', icon: <HomeOutlined />, key: '/' },
    { label: 'About', icon: <ProfileOutlined />, key: '/about' },
    { label: 'Contact', icon: <ContactsOutlined />, key: '/contact' }];

  return (
    <Menu
      onClick={({ key }) => navigate(key)}
      items={menuItems}
      defaultSelectedKeys={pathname}
    />
  );
}

export default Sidebar;
