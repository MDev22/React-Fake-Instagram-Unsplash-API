import React, {Component, useEffect, useState} from 'react';
import {createApi} from 'unsplash-js';
import InfiniteScroll from "react-infinite-scroll-component";
import Thumb from '../Feed/Tile/Thumb';
import ErrorMessage from '../../utility/ErrorMessage';

let UserFeedFunctionalComponent = (props) => {
    console.log(props.username);

    const [items, setItems] = useState([]);
    const [page, setPage] = useState(0);
    const [loaded, setLoaded] = useState(null);
    const [hasMore, setHasMore] = useState(true);
    const perPage = 10;

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = (apikey = props.apikey) => {
        const unsplash = createApi({
            accessKey: apikey
        });
        
        unsplash.users.getPhotos(
            {
                username: props.username,
                perPage: perPage,
                page: page + 1
            }
        ).then(result => {
            if (result.errors) {
                console.error('Unsplash API Photo List by username => Error occurred: ', result.errors[0]);
                setLoaded(false);
            } else if (result.response.results.length > 0) {
                setLoaded(true);
                setPage(page + 1);
                setItems(items.concat(result.response.results))
            } else {
                setHasMore(false);
                return;
            }
        });    
    };

    if (loaded === false) {
        return (
            <ErrorMessage />
        )
    }

    return (
        <section className="contain feed">
            <InfiniteScroll
                dataLength = {items.length}
                next = {() => fetchImages()}
                hasMore = {hasMore}
                loader = {
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                }
                endMessage = {<p className="message">{process.env.REACT_APP_END_FEED_MESSAGE}</p>}
            >
                {items.map((item, index) => (
                    <Thumb key={index} photoid={item.id} username={item.user.username} alt={item.alt_description} thumbnail={item.urls.regular} reactions={false} linkable={true} />
                ))}
            </InfiniteScroll>
        </section>
    );
};

class UserFeed extends Component {
    render() {
        return (
            <section className="user-feed">
                <UserFeedFunctionalComponent apikey={this.props.apikey} username={this.props.username} />
            </section>
        );
    }
}

export default UserFeed;