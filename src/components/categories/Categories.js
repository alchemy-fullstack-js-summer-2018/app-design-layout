import React, { Component } from 'react';
import Category from './Category';

class Categories extends Component {
  render() { 
    return (
      <ul>
        {Categories.map(category => (
          <Category
            key={category.key}
            category={category}
          />
        ))}
      </ul>
    );
  }
}
 
export default Categories;