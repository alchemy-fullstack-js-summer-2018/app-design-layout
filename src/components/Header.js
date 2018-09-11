import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';

class Header extends Component {

  render() {
    return (
      <div className={styles.header}>

        <section className="header-container">
          <div>
            <h1 id="title">Tuna Tracker</h1>

            <nav id="nav-header">
              <ul>
                <li>
                  <NavLink exact activeClassName="active" to="/Home">Home</NavLink>
                </li>
                <li>
                  <NavLink exact activeClassName="active" to="/Dashboard">Dashboard</NavLink>
                </li>
                <li>
                  <NavLink exact activeClassName="active" to="/About">About</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </div>
    );
  }
}
export default Header;                                                                                                                                                                                                                                                     