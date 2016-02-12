/* global,e */
import React, { PropTypes } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/actions';

import remote from 'remote';
const FileUtils = remote.require('./utils/FileUtils');

const ENTER = 13;
const TITLE_MAX_LENGTH = 30;

export default class SlideAddingForm extends React.Component {
  displayName: 'SlideAddingForm';

  componentDidUpdate() {
    this.refs.addingForm.focus();
  }

  handleTitleEnter(e, actions) {
    if (e.which === ENTER) {
      e.preventDefault();
      const title = this.refs.addingForm.value.trim();
      const message = this.validateTitle(title);

      if (message.length > 0) {
        return actions.showTitleError(message);
      }

      FileUtils.createSlideDir(title);
      this.clearTitle();

      return actions.addTitle();
    }
  }

  clearTitle() {
    this.refs.addingForm.value = '';
  }

  validateTitle(title) {
    let message = '';

    if (title.length > TITLE_MAX_LENGTH) {
      message = 'too long(max 30 chars)';
    }
    if (FileUtils.isExistingDir(title)) {
      message = 'already exists';
    }

    return message;
  }

  render() {
    const { display, error, dispatch } = this.props;
    const actions = bindActionCreators(Actions, dispatch);

    return (
      <div style={{ display: 'inline' }}>
        <form className='pure-form'
          style={{ display: display ? 'inline-block' : 'none' }}>

          <fieldset>
            <input
              autoFocus={true}
              type='text'
              className='directory-name'
              placeholder='directory name'
              ref='addingForm'
              onKeyPress={(e) => this.handleTitleEnter(e, actions)} />
            <span className='error'>{error}</span>
          </fieldset>
        </form>

        <ul className='pure-menu-list'>
          <li>
            {( () => {
              if (display)
                return (
                  <a href='#' id='hide-form-button' onClick={(e) => {
                    e.preventDefault();
                    this.clearTitle();
                    actions.hideAddingForm();
                  }}>
                    <i className='fa fa-times'></i>
                  </a>
                );
              else
                return (
                  <a href='#' id='show-form-button' onClick={(e) => {
                    e.preventDefault();
                    actions.showAddingForm();
                  }}>
                    <i className='fa fa-plus'></i>
                  </a>
                );
            })()}
          </li>
        </ul>
      </div>
    );
  }
}

SlideAddingForm.propTypes = {
  display: PropTypes.bool,
  error: PropTypes.string
};

export default connect((state) => {
  return {
    display: state.toJS().homes.display,
    error: state.toJS().homes.error
  };
})(SlideAddingForm);
