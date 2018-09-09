import React, { Component } from 'react';
import styles from './Footer.css';

class Footer extends Component {

  render() { 
    return (
      <div className={styles.footer}>
        <section className="footer-container">
          <p>You may contact me at: <a href = "mailto: rnavarro182@gmail.com">rnavarro182@gmail.com.</a> No rights reserved.</p>
        </section>
      </div>
    );
  }
}
 
export default Footer;