import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Dashboard from '../categories/Dashboard';
import styles from './Header.css';

class App extends Component {
  render() { 
    return (
      <Router>
        <div className="page-container">
          <header className={styles.header}>
            <Header/>
          </header>
          
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/categories" component={Dashboard}/>
              <Redirect to="/"/>
            </Switch>
          </main>

          <aside>
            SIDEBAR
          </aside>

          <footer>
            <Footer/>
          </footer>
        </div>
      </Router>
    );
  }
}
 
export default App;