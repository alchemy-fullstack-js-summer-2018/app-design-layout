import React, { Component } from 'react';
import { Chart } from 'primereact/chart';
import styles from './BudgetChart.css';

class BudgetChart extends Component {
  state = { 
    data: {
      datasets: [{
        data: [
          400,
          125,
          250,
          125,
          300
        ],
        backgroundColor: [
          '#FF6384',
          '#4BC0C0',
          '#FFCE56',
          '#E7E9ED',
          '#36A2EB'
        ],
        label: 'My dataset'
      }],
      labels: [
        'Rent',
        'Bars',
        'Insurance',
        'Restaurants',
        'Groceries'
      ]
    }
  }
  render() { 
    const { data } = this.state;
    return (
      <div className={styles.budgetChart}>
        <div className="content-section implementation">
          <Chart type="polarArea" data={data} />
        </div>
      </div>
    );
  }
}
 
export default BudgetChart;