import { combineReducers } from 'redux-immutablejs';
import homes from '../reducers/homes';

const rootReducer = combineReducers({
  homes
});

export default rootReducer;
