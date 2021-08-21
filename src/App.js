import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
        {/* if path is PUBLIC_URL => Homepage */}
        <Route exact path={process.env.PUBLIC_URL} component={Home} />
      </Router>
    );
  }
}

export default App;