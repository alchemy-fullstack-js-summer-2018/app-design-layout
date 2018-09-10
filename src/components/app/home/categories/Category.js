import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Category.css';

class Category extends PureComponent {

  static propTypes = {
    category: PropTypes.object.isRequired,
  };

  render() { 
    const { category } = this.props;
    return (
      <div className={styles.category}>
        <p>{category.name}</p>
        <p>{category.budget} // {category.youSpent}</p>
      </div>
    );
  }
}
 
export default Category;