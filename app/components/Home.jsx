import React, { PropTypes } from 'react';
import remote from 'remote';
import { connect } from 'react-redux';
import _ from 'lodash';

import SlideAddingForm from './SlideAddingForm';

const FileUtils = remote.require('./utils/FileUtils');

export default class Home extends React.Component {
  displayName: 'Home';

  constructor() {
    super();
    FileUtils.createBaseDir();
  }

  render() {
    const { display, error } = this.props;
    const slides = FileUtils.slideDirectories();

    return (
      <main>
        <div className='home-menu pure-menu pure-menu-horizontal pure-menu-fixed'>
          <div className='pure-menu-heading'>
            <a href='#'>Zatpr</a>
          </div>
          <SlideAddingForm display={display} error={error} />
        </div>

        <div className='body'>
          <ul className='slides'>
            {_.map(slides, (slide) => {
              return (
                <li>
                  <a className='name' href='#'>
                    <i className='fa fa-folder-o'></i>
                    {slide}
                  </a>
                  <a className='trash' href='#'>
                    <i className='fa fa-trash'></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    );
  }
}

Home.propTypes = {
  display: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default connect((state) => {
  return {
    display: state.toJS().homes.display,
    error: state.toJS().homes.error
  };
})(Home);
