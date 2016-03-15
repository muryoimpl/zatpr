import React from 'react';

import SlideAddingForm from './SlideAddingForm';

export default class Slide extends React.Component {
  displayName: 'Slide'

  constructor() {
    super();
  }

  render() {
    return (
      <main>
        <div className='home-menu pure-menu pure-menu-horizontal pure-menu-fixed'>
          <div className='pure-menu-heading'>
            <span>Zatpr</span>
          </div>
          <SlideAddingForm history={history}/>
        </div>

        <div className='body'>
        </div>
      </main>
    );
  }
}
