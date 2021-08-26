import React, {Component} from 'react';
import {useHistory} from 'react-router-dom';

const GoBackFunctionalComponent = () => {
    return (
        <div className="goback">
            <div onClick={useHistory().goBack}>
                <img src={process.env.PUBLIC_URL + "/media/icons/icon_back.svg"} alt="Go back"/>
            </div>
        </div>
    );
};

class GoBack extends Component {
    render() {
        return (
            <GoBackFunctionalComponent />
        );
    }
}

export default GoBack;