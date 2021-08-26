import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import GoBack from '../../utility/GoBack';

class UserHeader extends Component {
    render() {
        return (
            <header className="user" role="banner" itemscope itemtype="http://schema.org/WPHeader">
                <Helmet> 
                    <title>{this.props.title + ' - ' + process.env.REACT_APP_NAME}</title>
                    <meta name="description" content={this.props.description !== null ? this.props.description : process.env.REACT_APP_DEFAULT_DESCRIPTION} />
                </Helmet>

                <div className="contain">
                    <GoBack />
                    <h1 itemprop="name">{this.props.title}</h1>
                </div>
            </header>
        );
    }
}

export default UserHeader;