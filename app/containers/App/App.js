import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
import Layout from '../../containers/Layouts/PublicPage/PublicPage';
import LoginPanel from '../../components/Account/LoginPanel/LoginPanel';
import SignupPanel from '../../components/Account/SignupPanel/SignupPanel';
import PasswordRestorePanel from '../../components/Account/PasswordRestorePanel/PasswordRestorePanel';

class App extends Component {
  render() {
    return (
      <Layout>
        <Row>
          <Col xl={4} l={4} m={12} s={12}>
            <LoginPanel/>         
          </Col>
          <Col xl={4} l={4} m={12} s={12}>
            <SignupPanel/> 
          </Col>
          <Col xl={4} l={4} m={12} s={12}>
            <PasswordRestorePanel />
          </Col>        
        </Row>
      </Layout>
    );
  }
}

export default App;

