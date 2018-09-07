import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';

class App extends PureComponent {

  render() { 
    return (
      <Router>
        <div>
          <Header/>
          <main>
            {/* <Route exact path ="/" componen */}
          </main>
        </div>
      </Router>
    );
  }
}

export default App;