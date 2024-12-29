import React from 'react';
import { Admin, Resource } from 'react-admin';
import Dashboard from './Dashboard';
import LoginPage from './LoginPage';
import authProvider from './authProvider';
import dataProvider from './dataProvider';

function App() {
  return (
    <Admin
      dashboard={Dashboard}
      loginPage={LoginPage}
      authProvider={authProvider}
      dataProvider={dataProvider}
    >
      <Resource name="users" />
    </Admin>
  );
}

export default App;
