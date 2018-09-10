import React, { Component } from 'react';
import styles from './Header.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  render() {

    return (
      <div className={styles.header}>
        <nav>
          <span className="menu-toggle">Menu <i className="fas fa-bars"></i></span>
          <div className="menu-content">
            <NavLink
              to="/"
              style={{ color: '#2B4353', textDecoration: 'none', fontWeight: 'bold' }} 
              exact activeStyle={{ color: '#307672', fontWeight: 'bold' }}
            >Home</NavLink>
            <NavLink
              to="/categories"
              style={{ color: '#2B4353', textDecoration: 'none', fontWeight: 'bold' }} 
              activeStyle={{ color: '#307672', fontWeight: 'bold' }}
            >Categories</NavLink>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;