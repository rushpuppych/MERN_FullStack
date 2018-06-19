import React from 'react';
import {Row, Col, Card} from 'react-materialize';
import Theme from '../../assets/themes/Default';
import Lang from './DemoLang';
import Style from './Demo.css';

const demo = (props) => (
    <Row>
        <Col m={4} s={4}>
            <Card className={Theme.components.demo.backgroundColor} textClassName={Theme.components.demo.textColor} title="Test Titel" actions={[<a href='/test'>{Lang.link}</a>]}>
                {Lang.content}
                <span className={Style.DemoCssTest}>CSS Module Test</span>
            </Card>
        </Col>        
    </Row>
);

export default demo;

