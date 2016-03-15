import React from 'react';

export default class EditorPane extends React.Component {
  displayName: 'EditorPane'

  constructor() {
    super();
  }

  render() {
    return (
      <div className='editor-pane'>
        <form className='pure-form'>
          <textarea autoFocus >
          </textarea>
        </form>
      </div>
    );
  }
}
