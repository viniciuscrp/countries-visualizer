import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import Home from './pages/home/Index';
import Details from './pages/details/Index';
import Layout from './components/layout/Index';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route path="/details/:code">
            <Details />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);