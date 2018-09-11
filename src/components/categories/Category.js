import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Category.css';

class Category extends Component {
  static propTypes = {
    category: PropTypes.object.isRequired
  };
  
  render() {
    const { category } = this.props;

    return (
      <li className={styles.category}>
        <p>{category.name}</p>
        <p>{category.budget}</p>
      </li>
    );
  }
}
 
export default Category;