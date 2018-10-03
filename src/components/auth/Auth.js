import React, { PureComponent } from 'react';
import styles from './Auth.css';

class Auth extends PureComponent {
  render() { 
    return (
      <form className={styles.auth}>
        <p>welcome, librarian.</p>
        <label>
          <i className="fas fa-user"></i>
          <input placeholder="name"/>
        </label>
        <label>
          <i className="fas fa-key"></i>
          <input placeholder="password"/>
        </label>
        <p>don&apos;t have an account? sign up.</p>
      </form>
    );
  }
}
 
export default Auth;