import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Cookie from 'cookie-machine';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './containers/App/App';
import Theme from './assets/themes/Default';

// Add JWT Token to Request
const token = Cookie.get('jwt_token');
Axios.interceptors.request.use(function(config) {
    if ( token != null ) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Add JWT Cookie from Response
Axios.interceptors.response.use(function(config) {
    // todo: There musst be that "jwt_token" field in the response
    // todo: if this comes store it in a cookie
    const token = 'GET_IT_FROM_CONFIG';
    Cookie.set('jwt_token', token);
    return config;
});

// Setting Background Theme Class
document.body.className = Theme.body.backgroundColor;

// Rendering React App
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
