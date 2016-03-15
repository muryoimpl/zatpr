import React, { PropTypes } from 'react';

import Header from './Header';
import EditorPane from './EditorPane';

export default class Slide extends React.Component {
  displayName: 'Slide'

  constructor() {
    super();
  }

  render() {
    return (
      <main>
        <Header history={this.props.history} />

        <div className='body'>
          <EditorPane />
        </div>
      </main>
    );
  }
}

Slide.propTypes = {
  history: PropTypes.object
};
