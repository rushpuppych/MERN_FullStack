import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Navbar, NavItem} from 'react-materialize';
import Aux from '../../../hoc/ReactAux';
import Theme from '../../../assets/themes/Default';
import LoginPanel from '../../../components/Account/LoginPanel/LoginPanel';
import SignupPanel from '../../../components/Account/SignupPanel/SignupPanel';
import PasswordRestorePanel from '../../../components/Account/PasswordRestorePanel/PasswordRestorePanel';


class PublicPage extends Component {
    render() {
        return (
            <Aux>
                <Navbar className={Theme.containers.layouts.publicPage.backgroundColor} brand='&nbsp;MERN-Stack' fixed right>
                    <NavItem href='/'>Login</NavItem>
                    <NavItem href='/signup'>Signup</NavItem>
                    <NavItem href='/restore'>Restore Password</NavItem>
                </Navbar>

                <main>
                    <Route path="/" exact component={LoginPanel} />
                    <Route path="/signup" exact component={SignupPanel} />
                    <Route path="/restore" exact component={PasswordRestorePanel} />
                </main>
            </Aux>
        );
    }
};

export default PublicPage;