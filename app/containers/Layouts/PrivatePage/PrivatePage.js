import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { Row, Navbar } from 'react-materialize';
import Aux from '../../../hoc/ReactAux';
import Theme from '../../../assets/themes/Default';
import LogoutPanel from '../../../components/Account/LogoutPanel/LogoutPanel';

class PrivatePage extends Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Navbar className={Theme.containers.layouts.publicPage.backgroundColor} brand='MERN-Stack' fixed right>
                        <li><Link to="/logout">Logout</Link></li>
                    </Navbar>
                </Row>
                <main>
                    <h1>Private Area</h1>
                    <p>This could be your Application!</p>
                </main>
                <main>
                    <AnimatedSwitch atEnter={{ opacity: 0 }} atLeave={{ opacity: 0 }} atActive={{ opacity: 1 }} className="switch-wrapper">                    
                        <Route path="/logout" exact component={LogoutPanel} />
                    </AnimatedSwitch>
                </main>                
            </Aux>
        );
    }
};

export default PrivatePage;