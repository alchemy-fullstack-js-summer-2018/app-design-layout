import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './home/Home';
import Amps from './amps/Amps';
import About from './about/About';

class App extends PureComponent {

  render() {

    return (
      <Router>
        <div className="page-container">
          <Header/>
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/amps" component={Amps}/>
              <Route exact path="/about" component={About}/>
              <Redirect to="/home"/>
            </Switch>
          </main>
          <footer>
            App by Antreo Pukay! 2018
          </footer>       
        </div>
      </Router>
    );
  }
}

export default App;