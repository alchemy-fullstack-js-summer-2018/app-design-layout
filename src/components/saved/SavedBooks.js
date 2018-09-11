import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './SavedBooks.css';

class SavedBooks extends PureComponent {
  render() { 
    return (
      <div className={styles.savedBooks}>
        <ul>
          <li>
            <Link to="/text">The Plaster Cramp</Link>
          </li>
          <li>
            <Link to="/text">The Combed Thunderclap</Link>
          </li>
        </ul>
        
        <h2>your saved books</h2>
      </div>
    );
  }
}
 
export default SavedBooks;