import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';
import logo from '../../assets/budget-tool-icon.png';

class Header extends Component {
  
  handleSpecial = event => {
    event.preventDefault();
    alert('that link is so special!');
  };

  render() {

    return (
      <div className={styles.header}>

        <section className="header-container">
          {/* <div> */}
          <div className="logo">
            <img src={logo} style={{ width: '100px' }}/>
          
            <h1>Budget Tracker</h1>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/categories">Categories</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              
            </ul>
          </nav>
        </section>
      
      </div>
    );
  }
}

export default Header;