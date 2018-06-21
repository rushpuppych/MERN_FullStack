import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import PublicPage from '../../containers/Layouts/PublicPage/PublicPage';
//import PrivatePage from '../../containers/Layouts/PrivatePage/PrivatePage';

class App extends Component {
  render() {
    // Check Login etc.
    const pageContainer = <PublicPage />;
    //const pageContainer = <PrivatePage />;

    return (
      <BrowserRouter>
         {pageContainer}
      </BrowserRouter>
    );
  }
}

export default App;

