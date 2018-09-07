import React, { Component } from 'react';

import Categories from './Categories';
import CategoryForm from './CategoryForm';


class CategoriesContainer extends Component {
  
 

  render() { 
    
    
    return (
      <div>
        <section>
          <h3>Add a Category</h3>
          <CategoryForm />
        </section>

        
        <section>
          <h3>Categories</h3>
          <Categories 
             
          />
        </section>
      </div>
    );
  }
}
 
export default 
 
CategoriesContainer;