import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/actions';

import SlideAddingForm from './SlideAddingForm';

export default class Header extends React.Component {
  displayName: 'Header';

  constructor() {
    super();
  }

  handleClickBackButton(e, actions) {
    e.preventDefault();

    this.props.history.pushState(null, '/');
    location.href = '#';
    return actions.backToHome();
  }

  render() {
    const { dispatch } = this.props;
    const actions = bindActionCreators(Actions, dispatch);

    return (
      <div className='home-menu pure-menu pure-menu-horizontal pure-menu-fixed'>
        <div className='pure-menu-heading'>
          <a href='#' onClick={(e) => this.handleClickBackButton(e, actions)}>Zatpr</a>
        </div>
        <SlideAddingForm
          handleClickBackButton={(e) => this.handleClickBackButton(e, actions)}/>
      </div>
    );
  }
}

Header.propTypes = {
  history: PropTypes.object
};

export default connect((state) => {
  return state.toJS();
})(Header);
