import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Header extends Component {

  state = {
    dropdownOpen: false
  }

  // this.toggle = this.toggle.bind(this);

  render() 
  { 
    return (
      <header className={styles.header}>
        <div className="header-container">
          <h1 className='header-title'>SAV<span className="last-letter">R</span></h1>
          <UncontrolledDropdown color="link">
            <DropdownToggle caret>
              {/* <i className="fas fa-bars fa-3x"/> */}
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <Link to="/">Home</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/about">About</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/contact">Contact</Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </header>
    );
  }
}
 
export default Header;