import React, {Component} from 'react';
import Author from './Author';
import Thumb from './Thumb';

class Photo extends Component {
    render() {
        return (
            <section className="wrapper photo">
                <Author username={this.props.item.user.username} avatar={this.props.item.user.profile_image.small} />
                <Thumb photoid={this.props.item.id} alt={this.props.item.alt_description} description={this.props.item.description} thumbnail={this.props.item.urls.regular} likes={this.props.item.likes} />
            </section>
        );
    }
}

export default Photo;