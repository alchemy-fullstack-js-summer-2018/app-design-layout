import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Category extends Component {
  static propTypes = {
    category: PropTypes.object.isRequired
  };
  
  render() {
    const { category } = this.props;

    return (
      <li>
        <p>{category.name}</p>
        <p>{category.budget}</p>
      </li>
    );
  }
}
 
export default Category;