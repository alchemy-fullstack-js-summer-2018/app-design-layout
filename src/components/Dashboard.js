import React, { Component } from 'react';
import Notes from './notes/Notes';
import NoteForm from './notes/NoteForm';

import {
  getNotes, 
  addNote,
  updateNote,
  removeNote } from '../services/notesApi';

class Dashboard extends Component {

  state = {
    key: null,
    notes: [],
    title: '',
    content: '',
    completed: false
  };

  componentDidMount() {
    getNotes()
      .then(notes => {
        this.setState({ notes });
      });
  }

  handleAdd = note => {
    return addNote(note)
      .then(added => {
        this.setState(({ notes }) => {
          return {
            notes: [...notes, added]
          };
        });
      });
  };

  handleUpdate = note => {
    return updateNote(note)
      .then(updated => {
        this.setState(({ notes }) => {
          return {
            notes: notes.map(note => note.key === updated.key ? updated : note)
          };
        });
      });
  };

  handleRemove = key => {
    return removeNote(key)
      .then(() => {
        this.setState(({ notes }) => {
          return {
            notes: notes.filter(note => note.key !== key)
          };
        });
      });
  };

  render() {

    const { notes } = this.state;

    return (
      <div className="page-container">
        <section className="pagehead">
          <h2>Manage Your Life with Notes</h2>
        </section>

        <section className="notedisplay">

          {notes &&
          <section>
            <h3>Notes</h3>
            <Notes
              notes={notes}
              onUpdate={this.handleUpdate}
              onRemove={this.handleRemove}
            />
          </section>  
          }
        </section>

        <section className="side">
          <h3>Add a Note</h3>
          <NoteForm onComplete={this.handleAdd}/>
        </section>
      </div>
    );
  }
}


export default Dashboard;