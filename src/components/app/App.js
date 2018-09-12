import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './home/Home';
import Contact from './Contact';
import About from './About';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


class App extends PureComponent {

  render() { 
    return (
      <Router>
        <Route render={({ location }) => (
          <div>
            <Route exact path="/" render={() => (
              <Redirect to="/about"/>
            )}/>
            {console.log(location)}
            <div className="page-container">
              <Header/>
              <main>
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={300}
                    className='fade'
                  >
                    <Switch location={location}>
                      <Route exact path ="/" component={Home}/>
                      <Route path="/about" component={About}/>
                      <Route path="/contact" component={Contact}/>
                      
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </main>
            </div>
          </div>
        )}/>
      </Router>
    );
  }
}

export default App;