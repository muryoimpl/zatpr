import React from 'react';

import remote from 'remote';

const FileUtils = remote.require('./utils/FileUtils');

export default class Home extends React.Component {
  displayName: 'Home';

  constructor() {
    super();
    FileUtils.createBaseDir();
  }

  render() {
    return (
      <div className='title'>こんにちは</div>
    );
  }
}

Home.propTypes = {
};
