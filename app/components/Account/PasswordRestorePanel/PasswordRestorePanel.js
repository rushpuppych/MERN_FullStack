import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetAccountPassword } from '../../../redux/actions/accountActions';
import { Card, CardTitle, Button, Icon, Input, Row, Col } from 'react-materialize';
import Theme from '../../../assets/themes/Default';
import PropTypes from 'prop-types'; 

/**
 * ReactComponent
 * passwordRestorePanel
 */
class passwordRestorePanel extends Component {
    constructor(props) {
        super(props);

        // Event Binding
        this.onReset = this.onReset.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    // contextTypes
    static contextTypes = {
        t: PropTypes.func.isRequired
    };    

    // Local State
    localState = {
        email: '',
    }

    /**
     * Reset Method
     */
    onReset(e) {
        this.props.resetAccountPassword(this.localState);
    }

    /**
     * OnChange Handler for State update
     */
    onChange(e) {
        this.localState[e.target.name] = e.target.value;
    }

    /**
     * React Render Component Method
     */    
    render() {
        const imageStyle = {
            width: '40%',
            backgroundImage: 'url("/images/webapp/Color5_sm.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        };

        return (
            <Row>
            <Col xl={6} l={8} m={12} s={12} offset="xl3 l2">
                <Card horizontal header={<CardTitle style={imageStyle} image=""></CardTitle>} className={Theme.components.demo.backgroundColor} textClassName={Theme.components.demo.textColor} title={this.context.t('Passwort Wiederherstellen')} 
                    actions={[
                        <Button key="restore_button" onClick={this.onReset} waves='light'>{this.context.t('Neues Passwort senden')}<Icon right>email</Icon></Button>
                    ]}>
                    {this.context.t('Bitte geben Sie ihre E-Mail ein.')}
                    <div>
                        <Input name="email" onChange={this.onChange} label={this.context.t('E-Mail')} s={12} />
                    </div>
                    <p></p>
                </Card>
            </Col>
        </Row>
        )
    }
};

export default connect(null, { resetAccountPassword })(passwordRestorePanel);

