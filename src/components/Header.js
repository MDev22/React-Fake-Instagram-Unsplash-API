import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header role="banner" itemscope itemtype="http://schema.org/WPHeader">
                <div className="contain logo">
                    <img src={process.env.PUBLIC_URL + "/media/logo.svg"} alt={process.env.REACT_APP_DEFAULT_TITLE} />
                </div>
            </header>
        );
    }
}

export default Header;