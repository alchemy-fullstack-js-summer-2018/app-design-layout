import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Text.css';



class Text extends PureComponent {
  state = {
    book: []
  };

  generateBook = () => {
    let book = [];
    for(let i = 0; i < 40; i++) {
      let line = [];
      const chars = ('abcdefghijklmnopqrstuvwxyz ,.').split('');
      for(let i = 0; i < 80; i++) {
        const randomIndex = Math.floor(Math.random(chars.length) * chars.length);
        line.push(chars[randomIndex]);
      }
      line = line.join('');
      book.push(line);
    }
    this.setState({ book });
  };

  componentDidMount() {
    this.generateBook();
  }

  render() { 
    const { book } = this.state;
    return (
      <section className={styles.text}>
        <div>
          <button>
            <i className="fas fa-bookmark"></i>
            Save
          </button>
        </div>
        <div className="content">
          {book.map((e, i) => <Line line={e} key={i}/>)}
        </div>
      </section>
    );
  }
}

export default Text;



class Line extends PureComponent {

  static propTypes = {
    line: PropTypes.string.isRequired
  };

  render() {
    const { line } = this.props;

    return (
      <p className="line">
        {line}
      </p>
    );
  }
}