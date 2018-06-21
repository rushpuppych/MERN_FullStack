import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Axios from 'axios';
import Cookie from 'cookie-machine';
import PublicPage from '../../containers/Layouts/PublicPage/PublicPage';
import PrivatePage from '../../containers/Layouts/PrivatePage/PrivatePage';

class App extends Component {
  render() {
    // Load JWT Token from Cookie
    const token = Cookie.get('AppToken');

    // Switching between Public and Private Page
    let pageContainer = <PublicPage />;
    if ( token != null ) {
      pageContainer = <PrivatePage />;
    }

    // Add JWT Token to Request
    Axios.interceptors.request.use(function(config) {
      if ( token != null ) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    return (
      <BrowserRouter>
         {pageContainer}
      </BrowserRouter>
    );
  }
}

export default App;

