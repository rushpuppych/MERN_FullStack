import React from 'react';
import {Card, Button, Icon, Input} from 'react-materialize';
import Theme from '../../../assets/themes/Default';
import Lang from './LoginPanelLang';
import Spacer from '../../../hoc/Spacer';

const loginPanel = (props) => (
    <Card className={Theme.components.demo.backgroundColor} textClassName={Theme.components.demo.textColor} title={Lang.title} 
        actions={[
            <Button waves='light'>{Lang.login_button}<Icon right>input</Icon></Button>
        ]}>

        {Lang.content}
        <span>
            <Input label={Lang.email} s={12} />
            <Input type="password" label={Lang.password} s={12} />
        </span>
        <Spacer/>
    </Card>
);

export default loginPanel;
