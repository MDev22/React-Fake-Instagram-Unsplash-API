import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Author extends Component {
    render() {
        return (
            <div className="wrapper author">
                <img src={this.props.avatar} alt={this.props.username} />
                <h3>
                    <Link to={process.env.PUBLIC_URL + "/user/" + this.props.username}> {this.props.username} </Link>
                </h3>
            </div>
        );
    }
}

export default Author;