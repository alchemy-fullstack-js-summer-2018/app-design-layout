import React, { PureComponent } from 'react';
import tunaGlamourShot from './../assets/tunaGlamourShot.jpg';
import Transition from 'react-transition-group/Transition';
//import PropTypes from 'prop-types';
import styles from './About.css';


class About extends PureComponent {

  render() {
    return (
      <section className={styles.about}>
      
        <h2>Track that tuna! about</h2>
        <div>
          <img src={tunaGlamourShot}  />
        </div>
      </section>
    );
  }
}

export default About;