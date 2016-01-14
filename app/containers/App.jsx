import React, { PropTypes } from 'react';
import DevTools from '../containers/DevTools';

export default class App extends React.Component {
  displayName: 'App';

  render() {
    if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test')
      return (
        <div>
          {this.props.children}
        </div>
      );
    else
      return (
        <div>
          {this.props.children}
          <DevTools />
        </div>
      );
  }
}

App.propTypes = {
  children: PropTypes.object
};
