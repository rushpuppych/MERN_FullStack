import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinAccount } from '../../../redux/actions/accountActions';
import { Card, CardTitle, Button, Icon, Input, Row, Col } from 'react-materialize';
import Theme from '../../../assets/themes/Default';
import PropTypes from 'prop-types'; 

/**
 * ReactComponent
 * loginPanel
 */
class loginPanel extends Component {
    constructor(props) {
        super(props);

        // Event Binding
        this.onSignin = this.onSignin.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    // contextTypes
    static contextTypes = {
        t: PropTypes.func.isRequired
    };

    // Local State
    localState = {
        email: '',
        password: ''
    }

    /**
     * Signup Method
     */
    onSignin(e) {
        this.props.signinAccount(this.localState);
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
            backgroundImage: 'url("/images/webapp/Color2_sm.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        };
        return (
            <Row>
                <Col xl={6} l={8} m={12} s={12} offset="xl3 l2">
                    <Card horizontal header={<CardTitle style={imageStyle} image=""></CardTitle>} className={Theme.components.demo.backgroundColor} textClassName={Theme.components.demo.textColor} title={this.context.t('Anmeldung')} 
                        actions={[
                            <Button key="login_button" onClick={this.onSignin} waves='light'>{this.context.t('Anmelden')}<Icon right>input</Icon></Button>
                        ]}>
                        {this.context.t('Bitte geben Sie Ihre Kontodaten ein.')}
                        <div>
                            <Input name="email" onChange={this.onChange} label={this.context.t('E-Mail')} s={12} />
                            <Input name="password" onChange={this.onChange} type="password" label={this.context.t('Passwort')} s={12} />
                        </div>
                        <p></p>
                    </Card>
                </Col>
            </Row>
        )
    }
}

// Component Export
export default connect(null, { signinAccount })(loginPanel);

