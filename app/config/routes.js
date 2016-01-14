import React from 'react';
import { Router, IndexRoute } from 'react-router';

import App from '../containers/App';
import Home from '../components/Home';

export default (
  <Router path='/' component={App}>
    <IndexRoute component={Home} />
  </Router>
);
