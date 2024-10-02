import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/layout';
import Main from './pages/main/main';
import Form from './pages/editProfile/editProfile';
import { appRoute } from './const';

function App() {
  return (
    <Routes>
      <Route path={appRoute.MAIN} element={<Layout />}>
        <Route index element={<Main />} />
        <Route path={appRoute.EDITPROFILE} element={<Form />} />
      </Route>
    </Routes>
  );
}

export default App;
