import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import Footer from './Footer';

function AppLayout({ children }) {
  return (
    <div className="__layout">
      <div className="__content">
        <Sidebar />
        {children}
      </div>
      <Footer />
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
