import { Component } from 'react';
import Cookie from 'cookie-machine';

/**
 * ReactComponent
 * loginPanel
 */
class logoutPanel extends Component {
    constructor(props) {
        super(props);

        // Kill Cookie
        Cookie.remove('jwt_token');

        // Reload Page
        document.location.href="/";
    }

    /**
     * React Render Component Method
     */    
    render() {
        return ("");
    }
}

// Component Export
export default logoutPanel

