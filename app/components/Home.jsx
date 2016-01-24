import React, { PropTypes } from 'react';
import remote from 'remote';
import { connect } from 'react-redux';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import md5 from 'md5';

import * as Actions from '../actions/actions';
import SlideAddingForm from './SlideAddingForm';
import SlideListItem from './SlideListItem';

const dialog = remote.require('dialog');
const FileUtils = remote.require('./utils/FileUtils');

export default class Home extends React.Component {
  displayName: 'Home';

  constructor() {
    super();
    FileUtils.createBaseDir();
  }

  handleTrashClick(e, dirName, actions) {
    e.preventDefault();

    const message = `Are you sure you want to delete "${dirName}"`;

    if (process.env.NODE_ENV === 'test') {
      FileUtils.removeSlideDir(dirName);
      return actions.removeSlide(dirName);
    } else {
      dialog.showMessageBox(
        { type: 'warning', message: message, buttons: ['OK', 'NG'] },
        (response) => {
          if (response === 0) {
            FileUtils.removeSlideDir(dirName);
            return actions.removeSlide(dirName);
          }
        }
      );
    }
  }

  render() {
    const { dirs, display, error, dispatch } = this.props;
    const actions = bindActionCreators(Actions, dispatch);

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
            {_.map(dirs, (dirname) => {
              return (
                <SlideListItem key={md5(dirname)} slideName={dirname} handleTrashClick={(e) => {
                  this.handleTrashClick(e, dirname, actions);
                }}/>
              );
            })}
          </ul>
        </div>
      </main>
    );
  }
}

Home.propTypes = {
  dirs: PropTypes.array,
  display: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default connect((state) => {
  return {
    dirs: state.toJS().homes.dirs,
    display: state.toJS().homes.display,
    error: state.toJS().homes.error
  };
})(Home);
