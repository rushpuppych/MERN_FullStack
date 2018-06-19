import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import Theme from './assets/themes/Default';

// Setting Background Theme Class
document.body.className = Theme.body.backgroundColor;

// Rendering React App
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
