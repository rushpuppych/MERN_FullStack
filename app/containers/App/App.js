import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
import Layout from '../../containers/Layouts/PublicPage/PublicPage';
import LoginPanel from '../../components/LoginPanel/LoginPanel'
import SignupPanel from '../../components/SignupPanel/SignupPanel'

class App extends Component {
  render() {
    return (
      <Layout>
        <Row>
          <Col xl={3} l={4} m={5} s={12}>
            <Row>
              <Col xl={12} l={12} m={12} s={12}>
                <LoginPanel/>
              </Col>
            </Row>
            <Row>
              <Col xl={12} l={12} m={12} s={12}>
                Hier kommt die Password vergessen Card
              </Col>
            </Row>            
          </Col>
          <Col xl={5} l={6} m={7} s={12}>
            <SignupPanel/> 
          </Col>        
        </Row>
      </Layout>
    );
  }
}

export default App;

