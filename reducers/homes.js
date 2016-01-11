import Immutable from 'immutable';
import * as Types from '../constants/actionTypes';

const initialState = Immutable.fromJS({
  display: false,
  error: ''
});

export default function homes(state = initialState, action) {
  switch (action.type) {
  case Types.SHOW_ADDING_FORM:
    return state.merge({
      display: true,
      error: ''
    });
  case Types.HIDE_ADDING_FORM:
    return state.merge({
      display: false,
      error: ''
    });
  case Types.SHOW_TITLE_ERROR:
    return state.merge({
      display: true,
      error: action.message
    });
  case Types.ADD_TITLE:
    return state.merge({
      display: false,
      error: ''
    });
  default:
    return state;
  }
}
