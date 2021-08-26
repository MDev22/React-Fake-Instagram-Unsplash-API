import React, {Component, useState, useEffect} from 'react';
import {createApi} from 'unsplash-js';
import InfiniteScroll from "react-infinite-scroll-component";
import ErrorMessage from '../../utility/ErrorMessage';
import Photo from './Tile/Photo';

/*
    The feed is the main section of homepage.
    Is an infinite scroll system using Unsplash API to retrive photo and information.
*/

let FeedFunctionalComponent = (props) => {
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(0);
    const [loaded, setLoaded] = useState(null);
    const maxresults = 10;
    const perPage = 5;

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = (apikey = props.apikey) => {
        if (items.length >= maxresults && hasMore === true) {
            setHasMore(false);
            return;
        }

        const unsplash = createApi({
            accessKey: apikey
        });
        
        unsplash.photos.list(
            {
                perPage: perPage,
                page: page + 1
            }
        ).then(result => {
            if (result.errors) {
                console.error('Unsplash API Photo List => Error occurred: ', result.errors[0]);
                setLoaded(false);
            } else {
                setLoaded(true);
                setPage(page + 1);
                setItems(items.concat(result.response.results))
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
                    <Photo key={index} item={item} />
                ))}
            </InfiniteScroll>
        </section>
    );
};

class Feed extends Component {
    render() {
        return (
            <FeedFunctionalComponent apikey={this.props.apikey} />
        );
    }
}

export default Feed;