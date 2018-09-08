import React, { PureComponent } from 'react';
import tunaGlamourShot from './../assets/tunaGlamourShot.jpg';
import styles from './Home.css';


class Home extends PureComponent {

  render() {
    return (
      <section className={styles.home}>
        <div className="main">
          <section id="thing">
            <h2>Track Your </h2>
            <h1>Tuna</h1> 
            <h2>Data.</h2>
            <div>
              <img src={tunaGlamourShot}  />
            </div>
            <div>
              <p className="sidebar">lalalalalal</p>
            </div>
          </section>
        </div>
      </section>
    );
  }
}

export default Home;