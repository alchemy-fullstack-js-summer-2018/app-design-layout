import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './NoteForm.css';

class NoteForm extends Component {

  state = {
    key: null,
    title: '',
    content:'',
    completed: false
  };

  static propTypes = {
    note: PropTypes.object,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func
  };

  componentDidMount() {
    const { note } = this.props;
    if(!note) return;

    this.setState(note);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, content, completed, key } = this.state;
    const note = { title, content, completed };
    if(key) note.key = key;

    this.props.onComplete(note)
      .then(() => {
        // leaving the following line in, in case this breaks something
        // if(key) return;
        this.setState({ title: '', content: '', completed: false });
      });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { key, title, content } = this.state;
    const { onCancel } = this.props;

    return (
      <div className={styles.noteform}>
        <form onSubmit={this.handleSubmit}>
          <InputControl name="Title" value={title} onChange={this.handleChange}/>
          <textarea name="Content" rows="4" columns="60" value={content} onChange={this.handleChange}/>
          <p>
            <button type="submit">{ key ? 'Update' : 'Add Note' }</button>
            {key && <button type="button" onClick={onCancel}>Cancel</button>}
          </p>
        </form>
      </div>
    );
  }
}

const InputControl = (props) => (
  <p>
    <label>
      {props.name}:&nbsp; 
      <input {...props} required/>
    </label>
  </p>
);

export default NoteForm;