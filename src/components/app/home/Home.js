import React, { PureComponent } from 'react';
import BudgetChart from './BudgetChart';

class Home extends PureComponent {
  state = {
    totalBudget: 2000,
    totalSpending: 1200
  }
  render() { 
    const { totalSpending, totalBudget } = this.state;
    return (
      <div>
        <p>Your budget is: ${totalBudget}</p>
        <p>You have spent: ${totalSpending}</p>
        <BudgetChart/>
      </div>
    );
  }
}
 
export default Home;