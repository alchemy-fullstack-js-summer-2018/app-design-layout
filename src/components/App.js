import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Dashboard from './Dashboard';
import About from './About';
import styles from './App.css';

class App extends Component {

  render() {

    return (
      <Router>
        <Fragment>
          <div className={styles.app}>
            
            <header>
              <Header/>
            </header>

            <main>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/about" component={About}/>
                <Redirect to ="/"/>
              </Switch>
            </main>

          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;