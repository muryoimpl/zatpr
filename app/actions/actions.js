import * as Types from '../constants/actionTypes';

export function showAddingForm() {
  return { type: Types.SHOW_ADDING_FORM };
}

export function hideAddingForm() {
  return { type: Types.HIDE_ADDING_FORM };
}

export function showTitleError(message) {
  return { type: Types.SHOW_TITLE_ERROR, message: message };
}

export function addTitle() {
  return { type: Types.ADD_TITLE };
}

export function removeSlide() {
  return { type: Types.REMOVE_SLIDE };
}

export function hideSlideAdding() {
  return { type: Types.HIDE_SLIDE_ADDING };
}
