import React, { PropTypes } from 'react';

export default class SlideListItem extends React.Component {
  displayName: 'SlideListItem'

  constructor() {
    super();
  }

  render() {
    return (
      <li>
        <a className='name' href='#'>
          <i className='fa fa-folder-o'></i>
          {this.props.slideName}
        </a>
        <a className='trash' href='#' onClick={(e) => {
          this.props.handleTrashClick(e, this.props.slideName);
        }}>
          <i className='fa fa-trash'></i>
        </a>
      </li>
    );
  }
}

SlideListItem.propTypes = {
  handleTrashClick: PropTypes.func,
  slideName: PropTypes.string.isRequired
};
