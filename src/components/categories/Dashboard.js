import React, { Component } from 'react';
import Categories from './Categories';
import categoryData from '../../services/category-data';

class CategoriesContainer extends Component {
  render() { 
    return (
      <div>
        <section>
          <h3>Categories</h3>
          <Categories categories={categoryData}/>
        </section>
      </div>
    );
  }
}
 
export default CategoriesContainer;