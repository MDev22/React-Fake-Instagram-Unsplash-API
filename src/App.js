import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import User from './User';
import Photo from './Photo';

class App extends Component {
	render() {
    	return (
      		<Router>
        		<Route exact path={process.env.PUBLIC_URL} component={Home} />
				<Route path={process.env.PUBLIC_URL + "/user/:username"} component={User} />
				<Route path={process.env.PUBLIC_URL + "/photo/:username/:photoid"} component={Photo} />
      		</Router>
    	);
	}
}

export default App;