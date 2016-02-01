import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from '../containers/App';
import Home from '../components/Home';
import Slide from '../components/Slide';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/:name/edit' component={Slide} />
  </Route>
);
