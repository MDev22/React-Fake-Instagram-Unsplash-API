import React, {Component, useEffect, useState} from 'react';
import {createApi} from 'unsplash-js';
import {useParams} from 'react-router-dom';
import ErrorMessage from './utility/ErrorMessage';
import UserTile from './components/User/UserTile';
import UserFeed from './components/User/UserFeed';
import UserHeader from './components/User/UserHeader';

let UserFunctionalComponent = (props) => {
    const params = useParams();
    const [userLoaded, setUserLoaded] = useState(null);
    const [user, setUser] = useState({});

    useEffect(() => {
        getUserInformation();
    }, []);

    const getUserInformation = (apikey = props.apikey) => {
        const unsplash = createApi({
            accessKey: apikey
        });
        
        unsplash.users.get(
            {username: params.username}
        ).then(result => {
            if (result.errors) {
                console.error('Unsplash API Get user by username => Error occurred: ', result.errors[0]);
                setUserLoaded(false);
            } else {
                setUserLoaded(true);
                setUser(result.response);
            }
        });    
    };
    
    if (userLoaded === false) {
        return (
            <ErrorMessage />
        )
    } 

    return (
        <div className="wrapper-user">
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
        </div>
    );
};

class User extends Component {
    render() {
        return (
            <UserFunctionalComponent apikey={process.env.REACT_APP_UNSPLASH_APPLICATION_ID} /> 
        );
    }
}

export default User;