import React, { Component } from 'react';
import styles from './Stages.css';
import battlefield from '../../assets/battlefield.jpg';
import fd from '../../assets/fd.jpg';
import dreamland from '../../assets/dreamland.jpg';
import fod from '../../assets/fod.jpg';
import stadium from '../../assets/stadium.jpg';
import yoshisStory from '../../assets/yoshis_story.png';

class Stages extends Component {
  render() { 
    return (
      <div className={styles.stages}>
        <h2>Legal stages in competitive Melee</h2>
        <section className="stages-container">
          <div>
            <img src={battlefield} alt="Battlefield"/>
            <p>Battlefield</p>
          </div>
          <div>
            <img src={fd} alt="Final Destination"/>
            <p>Final Destination</p>
          </div>
          <div>
            <img src={dreamland} alt="Dreamland"/>
            <p>Dreamland</p>
          </div>
          <div>
            <img src={fod} alt="Fountain of Dreams"/>
            <p>Fountain of Dreams</p>
          </div>
          <div>
            <img src={stadium} alt="Pokemon Stadium"/>
            <p>Pokemon Stadium</p>
          </div>
          <div>
            <img src={yoshisStory} alt="Yoshi's Story"/>
            <p>Yoshi&apos;s Story</p>
          </div>
        </section>
      </div>
    );
  }
}
 
export default Stages;