import React, { Component } from 'react';
import styles from './Home.css';

class Home extends Component {
  render() { 
    return (
      <div className={styles.home}>
        <h2>Home Page</h2>
        <p>This is a budget tracker app.</p>
      </div>
    );
  }
}
 
export default Home;