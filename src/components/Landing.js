import React, { Component } from 'react';
import image from '../assets/image-crop.jpg';

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="landingcontent">
          <img src={image}/>
          <h2>Manage Your Day Using Notes.</h2>
          <p>Store your notes and important reminders using <span className="title">Notes.app</span> and never lose a post-it note again. Your notes are most useful to you if they are well organized and you can find them and use them easily. Try to record them as soon as possible after you have an idea!</p>
          <p>Start using <span className="title">Notes.app</span> right away by clicking on the Dashboard link.</p>
        </div>
      </div>
    );
  }
}

export default Landing;