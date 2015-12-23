import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import routes from './config/routes';
import configureStore from './stores/configureStore';

const initialState = Immutable.fromJS({});
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('content')
);
