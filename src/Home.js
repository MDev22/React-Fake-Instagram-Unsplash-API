import React, {Component} from 'react';
import Header from './components/Header';
import Stories from './components/Stories';
import Feed from './components/Feed/MainFeed';

class Home extends Component {
    render() {
        return (
            [
                <Header />,
                <Stories />,
                <Feed apikey={process.env.REACT_APP_UNSPLASH_APPLICATION_ID} />
            ]
        );
    }
}

export default Home;