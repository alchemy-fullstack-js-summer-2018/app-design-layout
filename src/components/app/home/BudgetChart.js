import React, { Component } from 'react';
import { Chart } from 'primereact/chart';
import Categories from './categories/Categories';

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
        label: 'Budget'
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
      <div>
        <div className="content-section implementation">
          <Chart className="chart" type="bar" data={data} />
        </div>
        <Categories/>
      </div>
    );
  }
}
 
export default BudgetChart;