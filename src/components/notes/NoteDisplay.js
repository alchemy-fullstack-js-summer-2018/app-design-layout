import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './notes.css';


class Note extends Component {
  static propTypes = {
    note: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired
  };

  onCompleted = () => {
    const { note, onComplete } = this.props;
    return onComplete(note);
  };

  render() {
    const { note, onEdit, onDelete } = this.props;

    return (
      <div className={styles.note}>
        <div className='noteblock'>
        
          <p className="notetitle">
            {note.title}</p>
          <p>{note.content}</p>
          <input type="checkbox" checked={note.completed} onChange={this.onCompleted}/> Completed  
          
          <button name="edit" onClick={onEdit}>Edit</button>
          <button name="delete" onClick={onDelete}>Delete</button>  
        </div>  
      </div>
    );
  }
}

export default Note;