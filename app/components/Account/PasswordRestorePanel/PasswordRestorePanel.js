import React, { Component } from 'react';
import { Card, CardTitle, Button, Icon, Input, Row, Col } from 'react-materialize';
import Theme from '../../../assets/themes/Default';
import Lang from './PasswordRestorePanelLang';

/**
 * ReactComponent
 * passwordRestorePanel
 */
class passwordRestorePanel extends Component {
    /**
     * React Render Component Method
     */    
    render() {
        const imageStyle = {
            width: '40%',
            backgroundImage: 'url("/images/webapp/Color5.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        };

        return (
            <Row>
            <Col xl={6} l={8} m={12} s={12} offset="xl3 l2">
                <Card horizontal header={<CardTitle style={imageStyle}></CardTitle>} className={Theme.components.demo.backgroundColor} textClassName={Theme.components.demo.textColor} title={Lang.title} 
                    actions={[
                        <Button key="restore_button" waves='light'>{Lang.restore_button}<Icon right>email</Icon></Button>
                    ]}>
                    {Lang.content}
                    <div>
                        <Input label={Lang.email} s={12} />
                    </div>
                    <p></p>
                </Card>
            </Col>
        </Row>
        )
    }
};

export default passwordRestorePanel;

