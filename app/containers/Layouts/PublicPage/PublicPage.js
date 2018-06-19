import React, {Component} from 'react';
import Aux from '../../../hoc/ReactAux';
import {Navbar} from 'react-materialize';
import Theme from '../../../assets/themes/Default';

class PublicPage extends Component {
    render() {
        return (
            <Aux>
                <Navbar className={Theme.containers.layouts.publicPage.backgroundColor} brand='&nbsp;MERN-Stack' fixed right>
                </Navbar>

                <main>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
};

export default PublicPage;