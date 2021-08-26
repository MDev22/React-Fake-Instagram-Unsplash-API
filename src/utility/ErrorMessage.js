import React, {Component} from 'react';

class ErrorMessage extends Component {
    render() {
        return (
            <p className="message error">{process.env.REACT_APP_UNSPLASH_API_ERROR_MESSAGE}</p>
        );
    }
}

export default ErrorMessage;