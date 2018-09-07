import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Note extends Component {
  static propTypes = {
    note: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  render() {
    const { note, onEdit, onDelete } = this.props;

    return (
      <div id="note">
        <p>
          {note.title}</p>
        <p>{note.content}</p>
        <button name="edit" onClick={onEdit}>Edit</button>
        <button name="delete" onClick={onDelete}>Delete</button>    
      </div>
    );
  }
}

export default Note;