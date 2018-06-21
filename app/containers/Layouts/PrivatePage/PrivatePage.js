import React, {Component} from 'react';
import {Navbar} from 'react-materialize';
import Aux from '../../../hoc/ReactAux';
import Theme from '../../../assets/themes/Default';

class PrivatePage extends Component {
    render() {
        return (
            <Aux>
                <Navbar className={Theme.containers.layouts.publicPage.backgroundColor} brand='&nbsp;MERN-Stack' fixed right>
                </Navbar>

                <main>
                    <h1>Private Area</h1>
                </main>
            </Aux>
        );
    }
};

export default PrivatePage;