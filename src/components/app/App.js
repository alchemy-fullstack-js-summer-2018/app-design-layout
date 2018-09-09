import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import About from './About';
import Characters from '../characters/Characters';
import Stages from '../stages/Stages';
import Footer from './Footer';
import styles from './App.css';
import Favicon from 'react-favicon';

class App extends Component {
  render() { 
    return (
      <Router>
        <div className="page-container">
          <Favicon url="data:image/png;base64,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" />
          <Header/>
          <main className={styles.app}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/characters" component={Characters}/>
              <Route exact path="/stages" component={Stages}/>
              <Route exact path="/about" component={About}/>
              <Redirect to="/"/>
            </Switch>
          </main>

          <footer>
            <Footer/>
          </footer>
        </div>
      </Router>
    );
  }
}
 
export default App;