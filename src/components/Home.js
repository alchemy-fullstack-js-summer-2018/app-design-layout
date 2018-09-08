import React, { PureComponent } from 'react';
import tunaGlamourShot from './../assets/tunaGlamourShot.jpg';
import styles from './Home.css';


class Home extends PureComponent {

  render() {
    return (
      <section className={styles.home}>
        <h2>Track Your Tuna Data.</h2>
        <div>
          <img src={tunaGlamourShot}  />
        </div>
      </section>
    );
  }
}

export default Home;