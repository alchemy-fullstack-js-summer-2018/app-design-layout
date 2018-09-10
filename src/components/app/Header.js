import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

class Header extends Component {

  render() { 
    return (
      <header className={styles.header}>
        <div className="header-container">
          <h1 className='header-title'>SAV<span className="last-letter">R</span></h1>
          <i className="fas fa-bars fa-3x"></i>
        </div>
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