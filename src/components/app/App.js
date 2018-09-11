import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import { TransitionGroup } from 'react-transition-group';
import Header from './Header';
import Home from './Home';
import Hexagon from '../hexagon/Hexagon';
import SavedBooks from '../saved/SavedBooks';
import Text from '../hexagon/Text';
import Auth from '../auth/Auth';
import Splash from './Splash';
import styles from './App.css';




class App extends PureComponent {
  state = {
    splash: true
  };

  removeSplash = () => {
    this.setState(({ splash: false }));
  };

  render() { 
    const { splash } = this.state;
    return (
      <Router>
        <div className="page-container">
          {splash && <Splash onClick={this.removeSplash}/>}
          <Header/>
          <main className={styles.app}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/hexagon" component={Hexagon}/>
              <Route exact path="/saved" component={SavedBooks}/>
              <Route path="/text" component={Text}/>
              <Route exact path="/auth" component={Auth}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}
 
export default App;