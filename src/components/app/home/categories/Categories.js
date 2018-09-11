import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Category from './Category';
import { load } from './actions';
import styles from './Categories.css';

class Categories extends PureComponent {

  static propTypes = {
    categories: PropTypes.array.isRequired,
    load: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.load();
  }

  render() { 
    const { categories } = this.props;
    return (
      <div className={styles.categories}>
        <div className="categories-header-display">
          <p>Name</p>
          <p>Budget // Spent</p>
        </div>
        {categories.map(category => (
          <Category category={category} key={category.key}/>
        ))}

      </div>
    );
  }
}
 
export default connect(
  state => ({
    categories: state
  }),
  { load }
)(Categories);