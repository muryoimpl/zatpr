import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import DevTools from '../containers/DevTools';
import rootReducer from '../reducers';

const finalCreateStore = compose(
  applyMiddleware(thunk),
)(createStore);

const finalCreateStoreDev = compose(
  applyMiddleware(thunk),
  DevTools.instrument()
)(createStore);


export default function configureStore(initialState) {
  if (process.env.NODE_ENV === 'production')
    return finalCreateStore(rootReducer, initialState);
  else
    return finalCreateStoreDev(rootReducer, initialState);

}
