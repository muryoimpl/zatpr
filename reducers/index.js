import { combineReducers } from 'redux-immutablejs';
import home from '../reducers/home';

const rootReducer = combineReducers({
  home
});

export default rootReducer;
