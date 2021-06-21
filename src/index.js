import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import Home from './pages/home/Index';
import Layout from './components/layout/Index';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);