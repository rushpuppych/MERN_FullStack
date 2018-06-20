import React from 'react';
import {Card, Button, Icon, Input} from 'react-materialize';
import Theme from '../../../assets/themes/Default';
import Lang from './SignupPanelLang';
import Spacer from '../../../hoc/Spacer';

const signupPanel = (props) => (
    <Card className={Theme.components.demo.backgroundColor} textClassName={Theme.components.demo.textColor} title={Lang.title} 
        actions={[
            <Button waves='light'>{Lang.signup_button}<Icon right>person_add</Icon></Button>
        ]}>

        {Lang.content}
        <div>
            <Input label={Lang.firstname} s={6} />
            <Input label={Lang.familyname} s={6} />
            <Input label={Lang.email} s={12} />
            <Input type="password" label={Lang.password} s={12} />
            <Input type="password" label={Lang.passwordre} s={12} />
        </div>
        <Spacer/>
    </Card>
);

export default signupPanel;

