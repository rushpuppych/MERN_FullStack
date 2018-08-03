import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { Row, Navbar } from 'react-materialize';
import Aux from '../../../hoc/ReactAux';
import Theme from '../../../assets/themes/Default';
import LoginPanel from '../../../components/Account/LoginPanel/LoginPanel';
import SignupPanel from '../../../components/Account/SignupPanel/SignupPanel';
import PasswordRestorePanel from '../../../components/Account/PasswordRestorePanel/PasswordRestorePanel';


class PublicPage extends Component {
    render() {
        return (
            <Aux>
                <Row>    
                    <Navbar className={Theme.containers.layouts.publicPage.backgroundColor} brand='MERN-Stack' fixed right>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/signup">SignUp</Link></li>
                        <li><Link to="/restore">Restore Password</Link></li>
                    </Navbar>
                </Row>

                <main>
                    <AnimatedSwitch atEnter={{ opacity: 0 }} atLeave={{ opacity: 0 }} atActive={{ opacity: 1 }} className="switch-wrapper">
                        <Route path="/" exact component={LoginPanel} />
                        <Route path="/signin" exact component={LoginPanel} />
                        <Route path="/signup" exact component={SignupPanel} />
                        <Route path="/restore" exact component={PasswordRestorePanel} />
                    </AnimatedSwitch>
                </main>
            </Aux>
        );
    }
};

export default PublicPage;