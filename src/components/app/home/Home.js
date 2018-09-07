import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import BudgetChart from './BudgetChart';
import styles from './Home.css';

class Home extends PureComponent {
  state = {
    totalBudget: 2000,
    totalSpending: 1200
  }
  render() { 
    const { totalSpending, totalBudget } = this.state;
    return (
      <div className={styles.home}>
        <p>Your budget is: ${totalBudget}</p>
        <p>You have spent: ${totalSpending}</p>
        <BudgetChart/>
      </div>
    );
  }
}
 
export default Home;