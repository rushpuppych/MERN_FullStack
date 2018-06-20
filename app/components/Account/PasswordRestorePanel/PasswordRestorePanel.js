import React from 'react';
import {Card, Button, Icon, Input} from 'react-materialize';
import Theme from '../../../assets/themes/Default';
import Lang from './PasswordRestorePanelLang';
import Spacer from '../../../hoc/Spacer';

const passwordRestorePanel = (props) => (
    <Card className={Theme.components.demo.backgroundColor} textClassName={Theme.components.demo.textColor} title={Lang.title} 
        actions={[
            <Button waves='light'>{Lang.restore_button}<Icon right>email</Icon></Button>
        ]}>
        {Lang.content}
        <div>
            <Input label={Lang.email} s={12} />
        </div>
        <Spacer/>
    </Card>
);

export default passwordRestorePanel;

