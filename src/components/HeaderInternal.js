import React, {Component} from 'react';

class HeaderInternal extends Component {
    render() {
        return (
            <header>
                <div className="contain logo">
                    <img src={process.env.PUBLIC_URL + '/media/logo.svg'} alt={process.env.REACT_APP_DEFAULT_TITLE} />
                </div>
            </header>
        );
    }
}

export default HeaderInternal;