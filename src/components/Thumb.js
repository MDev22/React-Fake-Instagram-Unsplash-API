import React, {Component, useState} from 'react';
import ReactReadMoreReadLess from "react-read-more-read-less";
import {Link} from 'react-router-dom';
import useWindowDimensions from "../utility/WindowDimensions";
import Reaction from './Reaction';

/*
If a description is available, print a figcaption component.

Check window width to set a limit of characters:
If window.width <= 580 => description's limit to 100
If window.width > 580 => description's limit to 250 
*/

let FigCaptionFunctionalComponent = (props) => {
    const {width, height} = useWindowDimensions();
    let [charLimit, setCharLimit] = useState(250);

    if (typeof props.description !== 'string' || props.description.length === 0) {
        return null;
    }

    if (width <= 580 && charLimit === 250) {
        setCharLimit(100);
    } else if (width > 580 && charLimit === 100){
        setCharLimit(250);
    }

    return (
        <figcaption>
            <ReactReadMoreReadLess
                charLimit={charLimit}
                readMoreText={"Read more"}
                readLessText={"Read less"}
                readMoreClassName="read-more-less--more"
                readLessClassName="read-more-less--less"
            >
                {props.description}
            </ReactReadMoreReadLess>
        </figcaption>
    );
};

class Thumb extends Component {
    render() {
        return (
            <figure className="thumbnail">
                <Link to={process.env.PUBLIC_URL + "/photo/" + this.props.photoid}>
                    <img src={this.props.thumbnail} alt={this.props.alt}/>
                </Link>
                <Reaction photoid={this.props.photoid} likes={this.props.likes} />
                <FigCaptionFunctionalComponent description={this.props.description} />
            </figure>
        );
    }
}

export default Thumb;