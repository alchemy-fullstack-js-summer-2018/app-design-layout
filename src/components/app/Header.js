import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

class Header extends Component {

  render() { 
    return (
      <header className={styles.header}>
        <h1 className='header-title'>SAVR</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </nav>
      </header>
    );
  }
}
 
export default Header;