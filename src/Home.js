import React, {Component} from 'react';
import HeaderInternal from './components/HeaderInternal';
import Stories from './components/Stories';
import Feed from './components/Feed';

class Home extends Component {
    render() {
        return (
            [
                <HeaderInternal />,
                <Stories />,
                <Feed apikey={process.env.REACT_APP_UNSPLASH_APPLICATION_ID} />
            ]
        );
    }
}

export default Home;