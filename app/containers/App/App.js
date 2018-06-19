import React, { Component } from 'react';
import Layout from '../../containers/Layouts/PublicPage/PublicPage';
import Demo from '../../components/Demo/Demo'

class App extends Component {
  render() {
    return (
      <Layout>
        <Demo>Content</Demo>
      </Layout>
    );
  }
}

export default App;

