import React, {Component, useState} from 'react';

/*
    This is a fake reaction.
    The scope is to change the status of icon "like" and increase reactions counter, without
    API calls
*/

let ReactionFunctionalComponent = (props) => {
    const [favouritePhotos, setFavouritePhotos] = useState([]);
    
    const addFakeReaction = (action, photoid) => {
        switch (action) {
            case 'like':
                if (favouritePhotos.includes(photoid)) {
                    // Remove photo
                    setFavouritePhotos((favouritePhotos) => favouritePhotos.filter((value) => value !== photoid));
                } else {
                    // Add photo
                    setFavouritePhotos(favouritePhotos.concat(photoid));
                }
                break;
        }
    };

    return (
        <div className="wrapper reactions">
            <div className="reactions-controls">
                <div className="control" onClick={() => addFakeReaction("like", props.photoid)} >
                    {favouritePhotos.includes(props.photoid) ? (
                        <img src={process.env.PUBLIC_URL + "/media/icons/icon_like_active.svg"} alt="like active" />
                    ) : (
                        <img src={process.env.PUBLIC_URL + "/media/icons/icon_like.svg"} alt="like" />
                    )}
                </div>
            </div>
            <div className="reactions-stats">
                <span>
                    {favouritePhotos.includes(props.photoid) ? props.likes + 1 : props.likes}
                </span> Likes
            </div>
        </div>
    );
};

class Reaction extends Component {
    render() {
        return (
            <ReactionFunctionalComponent photoid={this.props.photoid} likes={this.props.likes} />
        );
    }
}

export default Reaction;