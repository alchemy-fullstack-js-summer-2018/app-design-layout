import React, { Component } from 'react';

// import Expenses from '../expenses/Expenses';

class CategoryDisplay extends Component {
  

  render() { 
    
    return ( 
      <div>
        <section>
          <strong>Auto</strong> budget is <strong>450</strong>
          <button name="edit" >✎</button>
          <button name="delete" >🗑</button>
        </section>

        <section>
          {/* <Expenses/>  */}
        </section>
      </div>
      
    );
  }
}
 
export default CategoryDisplay;