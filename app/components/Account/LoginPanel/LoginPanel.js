import React, {Component} from 'react';
import {Card, CardTitle, Button, Icon, Input, Row, Col} from 'react-materialize';
import Theme from '../../../assets/themes/Default';
import Lang from './LoginPanelLang';

/**
 * ReactComponent
 * loginPanel
 */
class loginPanel extends Component {
    /**
     * React Render Component Method
     */
    render() {
        return (
            <Row>
                <Col xl={6} l={8} m={12} s={12} offset="xl3 l2">
                    <Card horizontal header={<CardTitle image="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/2038533/1360/2053/m1/fpnw/wm1/t7ynrw1dvuchkdmejisst80fqdicgaymyanvvchfm9vzjjhhwlfsleoo5mmbyllv-.jpg?1481968520&s=507cb8cdaf6d036994f8ab2d77cdc207"></CardTitle>} className={Theme.components.demo.backgroundColor} textClassName={Theme.components.demo.textColor} title={Lang.title} 
                        actions={[
                            <Button key="login_button" waves='light'>{Lang.login_button}<Icon right>input</Icon></Button>
                        ]}>
                        {Lang.content}
                        <div>
                            <Input label={Lang.email} s={12} />
                            <Input type="password" label={Lang.password} s={12} />
                        </div>
                        <p></p>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default loginPanel;

