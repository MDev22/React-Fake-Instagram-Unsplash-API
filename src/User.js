import React, {Component} from 'react';
import {useHistory, useParams} from 'react-router-dom';

let UserInfoFunctionalComponent = () => {
    const params = useParams();

    return (
        <div>{params.userid}</div>
    );
};

let GoBackFunctionalComponent = () => {
    return (
        <div className="callback">
            <div onClick={useHistory().goBack}>Torna indietro</div>
        </div>
    );
};

class User extends Component {
    render() {
        return (
            <section className="user-wrapper">
                <GoBackFunctionalComponent />
                <UserInfoFunctionalComponent />
            </section>
        );
    }
}

export default User;