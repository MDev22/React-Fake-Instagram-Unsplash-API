import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import User from './User';

class App extends Component {
	render() {
    	return (
      		<Router>
        		{/* if path is PUBLIC_URL => Homepage */}
        		<Route exact path={process.env.PUBLIC_URL} component={Home} />

				{/* if path is PUBLIC_URL => Homepage */}
				<Route path={process.env.PUBLIC_URL + "/user/:userid"} component={User} />
      		</Router>
    	);
	}
}

export default App;