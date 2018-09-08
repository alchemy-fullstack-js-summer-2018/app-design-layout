import React, { PureComponent } from 'react';
import tunaGlamourShot from './../assets/tunaGlamourShot.jpg';
//import PropTypes from 'prop-types';
import styles from './About.css';


class Dashboard extends PureComponent {

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

export default Dashboard;