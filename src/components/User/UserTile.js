import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class UserTile extends Component {
    render() {
        return (
            <div className="wrapper user-tile">
                <div className="flex-wrapper center">
                    <img src={this.props.avatar} alt={this.props.username} />
                    <h3>
                        {/*
                            If linkable, print name.
                            If not linkable, print username with "@" as prefix
                        */}

                        {this.props.linkable === false ? (
                            '@' + this.props.username
                        ) : (
                            <Link to={process.env.PUBLIC_URL + "/user/" + this.props.username}> {this.props.name} </Link>
                        )}
                    </h3>
                </div>

                {this.props.printStats && (
                    <div className="wrapper user-stats">
                        <div>
                            <span className="value">{this.props.photos}</span>
                            <span>Photos</span>
                        </div>
                        <div>
                            <span className="value">{this.props.follower}</span>
                            <span>Followers</span>
                        </div>
                        <div>
                            <span className="value">{this.props.following}</span>
                            <span>Following</span>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default UserTile;