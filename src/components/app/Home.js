import React, { Component } from 'react';

import styles from './Home.css';

export class Home extends Component {

  render() { 

    return (
      <div className={styles.home}>
        <section>
          <h1>The Library of Babel</h1>
          <h2>by Jorge Luis Borges</h2>
          <p>a visual exploration</p>
        </section>
      </div>
    );
  }
}
export default Home;