import Immutable from 'immutable';
import * as Types from '../constants/actionTypes';

import FileUtils from '../../utils/FileUtils';

const initialState = Immutable.fromJS({
  display: false,
  error: '',
  dirs: FileUtils.slideDirectories()
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
      error: '',
      dirs: FileUtils.slideDirectories()
    });
  case Types.REMOVE_SLIDE:
    return state.merge({
      dirs: FileUtils.slideDirectories()
    });
  default:
    return state;
  }
}
