import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Cookie from 'cookie-machine';
import PublicPage from '../../containers/Layouts/PublicPage/PublicPage';
import PrivatePage from '../../containers/Layouts/PrivatePage/PrivatePage';

class App extends Component {
  render() {
    // Load JWT Token from Cookie
    const token = Cookie.get('jwt_token');

    // Switching between Public and Private Page
    let pageContainer = <PublicPage />;
    if ( token != null ) {
      pageContainer = <PrivatePage />;
    }

    return (
      <div>
        <BrowserRouter>
          {pageContainer}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

