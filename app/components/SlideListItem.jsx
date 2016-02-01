import React, { PropTypes } from 'react';

export default class SlideListItem extends React.Component {
  displayName: 'SlideListItem';

  constructor() {
    super();
  }

  render() {
    return (
      <li>
        <a className='name' href='#' onClick={(e) => this.props.handleNameClick(e)}>
          <i className='fa fa-folder-o'></i>
          {this.props.slideName}
        </a>
        <a className='trash' href='#' onClick={(e) => this.props.handleTrashClick(e)}>
          <i className='fa fa-trash'></i>
        </a>
      </li>
    );
  }
}

SlideListItem.propTypes = {
  handleNameClick: PropTypes.func,
  handleTrashClick: PropTypes.func,
  slideName: PropTypes.string.isRequired
};
