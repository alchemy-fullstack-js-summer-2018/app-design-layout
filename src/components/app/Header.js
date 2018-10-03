import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import Error from './Error';
import styles from './Header.css';

class Header extends PureComponent {

  render() { 

    return (
      <header className={styles.header}>
        <section>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/">home</NavLink>
              </li>
              <li>
                <NavLink exact to="/hexagon">hexagon</NavLink>
              </li>
              <li>
                <NavLink exact to="/saved">saved books</NavLink>
              </li>
              <li>
                <NavLink to="/auth">login</NavLink>
              </li>
            </ul>
          </nav>
        </section>

        <Error/>
      </header>
    );
  }
}
 
export default Header;