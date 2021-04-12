import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import SellerList from './pages/SellerList';
import SellerForm from './pages/SellerForm';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/seller-list" component={SellerList} />
      <Route path="/seller-form" component={SellerForm} />
    </BrowserRouter>
  );
}

export default Routes;