import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import routes from './config/routes';
import configureStore from './stores/configureStore';

const initialState = Immutable.fromJS({});
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('content')
);
