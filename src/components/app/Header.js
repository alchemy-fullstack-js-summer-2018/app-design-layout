import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() { 
    return (
      <div>
        <section>
          <h1>My Budget</h1>
          <na>
            <ul>
              <li>
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active" to="/">Categories</NavLink>
              </li>
            </ul>
          </na>
        </section>
      </div>
    );
  }
}
 
export default Header;