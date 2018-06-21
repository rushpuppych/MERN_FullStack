import React, {Component} from 'react';
import {Row, Navbar} from 'react-materialize';
import Aux from '../../../hoc/ReactAux';
import Theme from '../../../assets/themes/Default';

class PrivatePage extends Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Navbar className={Theme.containers.layouts.publicPage.backgroundColor} brand='MERN-Stack' fixed right>
                    </Navbar>
                </Row>
                <main>
                    <h1>Private Area</h1>
                    <p>This could be your Application!</p>
                </main>
            </Aux>
        );
    }
};

export default PrivatePage;