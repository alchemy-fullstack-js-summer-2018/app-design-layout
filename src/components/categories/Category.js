import React, { Component } from 'react';


import CategoryItem from './CategoryItem';
import CategoryForm from './CategoryForm';


class Category extends Component {

 

  handleEdit = () => {
    this.setState({ editing: true });
  };



  handleEndEdit = () => {
    this.setState({ editing: false });
  };

  render() { 
    
    return ( 
      <li>
        
        <CategoryForm/>
        <CategoryItem/>
       
      </li>
    );
  }
}
 
export default Category;
  
