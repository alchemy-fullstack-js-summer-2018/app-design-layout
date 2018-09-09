import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.css';
import logo from '../../assets/melee_logo.png';
import homeIcon from '../../assets/smash_ball.png';

class Header extends Component {

  render() { 
    return (

      <header className={styles.header}>
        <section className="header-container">
          <div className="logo-container">
            <img className="logo" src={logo}/>
          </div>
        </section>

        <nav>
          <li><NavLink exact to="/"><img src={homeIcon}/></NavLink></li>
          <li><NavLink className="reg-link" exact to="/characters">Characters</NavLink></li>
          <li><NavLink className="reg-link" exact to="/stages">Legal Stages</NavLink></li>
          <li><NavLink className="reg-link" exact to="/about">About</NavLink></li>
        </nav>
      </header>
    );
  }
}
 
export default Header;