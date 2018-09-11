import React, { PureComponent } from 'react';
import tunaGlamourShot from './../assets/tunaGlamourShot.jpg';
import styles from './Home.css';


class Home extends PureComponent {

  render() {
    return (
      <section className={styles.home}>
        <div className="main">
          <section className="thing">
            <div className="text">
              <h1>Track Your Tuna Data.</h1>
            </div>
            <div className="image">
              <img src={tunaGlamourShot}  />
            </div>
          </section>
        </div>
      </section>
    );
  }
}

export default Home;