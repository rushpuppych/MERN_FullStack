import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import axios from 'axios';
import cookie from 'cookie-machine';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './containers/App/App';
import Theme from './assets/themes/Default';
import Store from './redux/store';

// Config Axios Request
const token = cookie.get('jwt_token');
axios.interceptors.request.use(function(config) {
    if ( token != null ) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers.common['Content-Type'] = 'application/json; charset=utf-8';
    config.headers.common['Accept'] = 'application/json; charset=utf-8';

    return config;
});

// Add JWT Cookie from Response
axios.interceptors.response.use(function(config) {
    if(config.data.jwt_token != null) {
        cookie.set('jwt_token', token);
    }
    return config;
});

// Setting Background Theme Class
document.body.className = Theme.body.backgroundColor;
 
// Rendering React App
ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();