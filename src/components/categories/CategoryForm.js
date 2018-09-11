import React, { Component } from 'react';

class CategoryForm extends Component {

  


 

  render() { 
    
    return (
      <form >
        
        <p>Name</p>
        <input name="name"/>
        <p>Budget</p>
        <input name="budget"/>
       
        <p>
          <button type="submit">Add</button>
          <button type="button">Cancel</button>
        </p>
      </form>
    );
  }
}

// const InputControl = () => (
//   <p>
//     <label className="label">
//       <input>n</input>
//     </label>
//   </p>
// );
 
export default CategoryForm;