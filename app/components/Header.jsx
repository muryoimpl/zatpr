import React, { PropTypes } from 'react';

import SlideAddingForm from './SlideAddingForm';

export default class Header extends React.Component {
  displayName: 'Header';

  constructor() {
    super();
  }

  render() {
    return (
      <div className='home-menu pure-menu pure-menu-horizontal pure-menu-fixed'>
        <div className='pure-menu-heading'>
          <span>Zatpr</span>
        </div>
        <SlideAddingForm history={history} />
      </div>
    );
  }
}


Header.propTypes = {
  history: PropTypes.object
};
