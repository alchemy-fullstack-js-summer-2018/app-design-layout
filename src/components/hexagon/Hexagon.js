import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './Hexagon.css';

class Hexagon extends PureComponent {
  render() { 
    return (
      <section className={styles.hexagon}>
        {[...Array(5)].map((e, i) => <Shelf key={i}/>)}
      </section>
    );
  }
}
export default Hexagon;



class Shelf extends PureComponent {
  render() { 
    return (
      <section className="shelf">
        {[...Array(32)].map((e, i) => <Book key={i}/>)}
      </section>
    );
  }
}






class Book extends PureComponent {

  state = {
    title: ''
  };

  componentDidMount() {
    const titleLength = 5 + Math.floor(Math.random() * 8);
    const title = this.generateText(titleLength);
    this.setState({ title });
  }

  generateText = length => {
    let text = [];
    const chars = ('abcdefghijklmnopqrstuvwxyz, ').split('');
    for(let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random(chars.length) * chars.length);
      text.push(chars[randomIndex]);
    }
    return text.join('');
  };
  
  render() { 
    const { title } = this.state;

    return (
      <section className={['rotate', 'book'].join(' ')}>
        <Link to="/text">
          {title.toUpperCase()}
        </Link>
      </section>
    );
  }
}