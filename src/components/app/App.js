import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './home/Home';
import Contact from './Contact';
import About from './About';

class App extends PureComponent {

  render() { 
    return (
      <Router>
        <div className="page-container">
          <Header/>
          <main>
            <Switch>
              <Route exact path ="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;