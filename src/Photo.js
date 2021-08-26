import React, {Component, useEffect, useState} from 'react';
import {createApi} from 'unsplash-js';
import {useParams} from 'react-router-dom';
import ErrorMessage from './utility/ErrorMessage';
import UserHeader from './components/User/UserHeader';

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
    
    if (setPhotoLoaded === false) {
        return (
            <ErrorMessage />
        )
    } 

    return (
        <div className="wrapper-photo">
            {/*
            <UserHeader title={user.name} description={user.bio} />
            <div className="contain">
                {typeof user.profile_image !== typeof undefined && (
                    <div className="contain medium">
                        <UserTile 
                            avatar={user.profile_image.large}
                            username={user.username}
                            linkable={false}
                            printStats={true}
                            photos={user.total_photos}
                            follower={user.followers_count}
                            following={user.following_count}
                        />
                    </div>
                )}
            </div>
            <div className="contain medium">
                <UserFeed apikey={props.apikey} username={params.username}/>
            </div>
            */}
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