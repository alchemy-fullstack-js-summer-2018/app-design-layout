import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Splash.css';

class Splash extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  };
  
  render() { 
    return (
      <div className={styles.splash} onClick={this.props.onClick}>
        <span>
          <p>By this art you may contemplate the variations of the 23 letters...</p>
          <p><cite>The Anatomy of Melancholy</cite>, part 2, sect. II, mem. IV</p>
        </span>
      </div>
    );
  }
}
 
export default Splash;