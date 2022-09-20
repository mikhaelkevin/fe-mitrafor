import React from 'react';

import { Outlet } from 'react-router-dom';
import AppLayout from '../../components/global/AppLayout';

function Main() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}

export default Main;
