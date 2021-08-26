import React, {Component, useEffect, useState} from 'react';
import {createApi} from 'unsplash-js';
import {useParams} from 'react-router-dom';
import ErrorMessage from './utility/ErrorMessage';
import UserHeader from './components/User/UserHeader';
import Thumb from './components/Feed/Tile/Thumb';

let PhotoFunctionalComponent = (props) => {
    const params = useParams();
    const [photoLoaded, setPhotoLoaded] = useState(null);
    const [photo, setPhoto] = useState({});

    useEffect(() => {
        getPhotoInformation();
    }, []);

    const getPhotoInformation = (apikey = props.apikey) => {
        const unsplash = createApi({
            accessKey: apikey
        });
        
        unsplash.photos.get(
            {photoId: params.photoid}
        ).then(result => {
            if (result.errors) {
                console.error('Unsplash API Get photo by ID => Error occurred: ', result.errors[0]);
                setPhotoLoaded(false);
            } else {
                setPhotoLoaded(true);
                setPhoto(result.response);
            }
        });    
    };
    
    if (photoLoaded === false) {
        return (
            <ErrorMessage />
        )
    } 

    return (
        <div className="wrapper-photo">
            <UserHeader title={params.username} description={photo.alt_description} />
            <section className="contain medium">
                {typeof photo.urls !== typeof undefined && (
                    <Thumb alt={photo.alt_description} thumbnail={photo.urls.regular} description={photo.description} likes={photo.likes} />
                )}
            </section>
        </div>
    );
};

class Photo extends Component {
    render() {
        return (
            <PhotoFunctionalComponent apikey={process.env.REACT_APP_UNSPLASH_APPLICATION_ID}/>
        );
    }
}

export default Photo;