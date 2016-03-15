import React from 'react';

import Header from './Header';

export default class Slide extends React.Component {
  displayName: 'Slide'

  constructor() {
    super();
  }

  render() {
    return (
      <main>
        <Header history={history} />

        <div className='body'>
        </div>
      </main>
    );
  }
}
