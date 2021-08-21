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
                <Feed apikey='10bH_IgwPVlQKaTAYIFVLn4UJt5oofIIpZ4n5iYa0Zo' />
            ]
        );
    }
}

export default Home;