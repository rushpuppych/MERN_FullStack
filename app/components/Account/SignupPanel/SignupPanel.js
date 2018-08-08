import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupAccount } from '../../../redux/actions/accountActions';
import { Card, CardTitle, Button, Icon, Input, Row, Col } from 'react-materialize';
import Theme from '../../../assets/themes/Default';
import PropTypes from 'prop-types'; 

/**
 * ReactComponent
 * signupPanel
 */
class signupPanel extends Component {
    constructor(props) {
        super(props);

        // Event Binding
        this.onSignup = this.onSignup.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    // contextTypes
    static contextTypes = {
        t: PropTypes.func.isRequired
    };       

    // Local State
    localState = {
        firstname: '',
        familyname: '',
        email: '',
        password: '',
        passwordre: ''
    }

    /**
     * Signup Method
     */
    onSignup(e) {
        this.props.signupAccount(this.localState);
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
            backgroundImage: 'url("/images/webapp/Color4_sm.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        };

        return (
            <Row>
                <Col xl={6} l={8} m={12} s={12} offset="xl3 l2">
                    <Card horizontal header={<CardTitle style={imageStyle} image=""></CardTitle>} className={Theme.components.demo.backgroundColor} textClassName={Theme.components.demo.textColor} title={this.context.t('Konto Registrierung')} 
                        actions={[
                            <Button key="signup_button" onClick={this.onSignup} waves='light'>{this.context.t('Registrieren')}<Icon right>person_add</Icon></Button>
                        ]}>

                        {this.context.t('Bitte erstellen Sie einen Account um diese Platform zu nutzen.')}
                        <div>
                            <Input name="firstname" onChange={this.onChange} label={this.context.t('Vorname')} s={6} />
                            <Input name="familyname" onChange={this.onChange} label={this.context.t('Name')} s={6} />
                            <Input name="email" onChange={this.onChange} label={this.context.t('E-Mail')} s={12} />
                            <Input name="password" onChange={this.onChange} type="password" label={this.context.t('Passwort')} s={12} />
                            <Input name="passwordre" onChange={this.onChange} type="password" label={this.context.t('Passwort Wiederhohlung')} s={12} />
                        </div>
                    </Card>
                </Col>
            </Row>
        )
    }
}

// Component Export
export default connect(null, { signupAccount })(signupPanel);

