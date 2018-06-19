import React from 'react';
import Aux from '../../../hoc/Aux';
import {Navbar, NavItem, Icon} from 'react-materialize';

const layout = (props) => (
    <Aux>
        <Navbar brand='MERN-Stack' fixed right>
            <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
            <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
            <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
            <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
        </Navbar>

        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;