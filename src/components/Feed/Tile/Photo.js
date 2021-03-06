import React, {Component} from 'react';
import UserTile from '../../User/UserTile';
import Thumb from './Thumb';

class Photo extends Component {
    render() {
        return (
            <section className="wrapper photo">
                <UserTile username={this.props.item.user.username} name={this.props.item.user.name} avatar={this.props.item.user.profile_image.small} />
                <Thumb photoid={this.props.item.id} username={this.props.item.user.username} alt={this.props.item.alt_description} description={this.props.item.description} thumbnail={this.props.item.urls.regular} likes={this.props.item.likes} />
            </section>
        );
    }
}

export default Photo;