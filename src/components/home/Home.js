import React, { PureComponent } from 'react';
import styles from './Home.css';


class Home extends PureComponent {

  render() {
    return (
      <section className={styles.home}>
        
        <h2>
          Greetings Rockers and Rockettes 
        </h2>

        <h3>
          <p>This is a simple little app that highlights some of my favorite amps. I&apos;ve picked these because I&apos;ve either played them before, and/or I&apos;ve recorded these in the studio as an engineer</p>
          <p>Each amp has a little summary telling you a little more bout them, including anything special of note.</p>
        </h3>

      </section>
    );
  }
}

export default Home;