import React, { PropTypes } from 'react';
import remote from 'remote';
import { connect } from 'react-redux';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import md5 from 'md5';

import * as Actions from '../actions/actions';
import SlideListItem from './SlideListItem';
import Header from './Header';

const dialog = remote.require('dialog');
const FileUtils = remote.require('./utils/FileUtils');

export default class Home extends React.Component {
  displayName: 'Home';

  constructor() {
    super();
  }

  handleNameClick(e, dirname, actions) {
    e.preventDefault();
    this.props.history.pushState(null, `/${dirname}/edit`);
    return actions.hideSlideAdding();
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
    const { dirs, dispatch } = this.props;
    const actions = bindActionCreators(Actions, dispatch);

    return (
      <main>
        <Header history={history}/>

        <div className='body'>
          <ul className='slides'>
            {_.map(dirs, (dirname) => {
              return (
                <SlideListItem
                  history={history}
                  key={md5(dirname)}
                  slideName={dirname}
                  handleNameClick={(e) => this.handleNameClick(e, dirname, actions)}
                  handleTrashClick={(e) => this.handleTrashClick(e, dirname, actions)} />
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
  history: PropTypes.object
};

export default connect((state) => {
  return {
    dirs: state.toJS().homes.dirs
  };
})(Home);
