import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signupAccount } from '../../../redux/actions/accountActions';
import { Card, CardTitle, Button, Icon, Input, Row, Col } from 'react-materialize';
import Theme from '../../../assets/themes/Default';
import Lang from './SignupPanelLang';

/**
 * ReactComponent
 * signupPanel
 */
class signupPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            familyname: '',
            email: '',
            password: '',
            paswordre: ''
        }


        // Event Binding
        this.onSignup = this.onSignup.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    /**
     * Signup Method
     */
    onSignup(e) {
        this.props.signupAccount();
        
    }

    /**
     * OnChange Handler for State update
     */
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    /**
     * React Render Component Method
     */
    render() {
        return (
            <Row>
                <Col xl={6} l={8} m={12} s={12} offset="xl3 l2">
                    <Card horizontal header={<CardTitle image="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/2038533/1360/2053/m1/fpnw/wm1/t7ynrw1dvuchkdmejisst80fqdicgaymyanvvchfm9vzjjhhwlfsleoo5mmbyllv-.jpg?1481968520&s=507cb8cdaf6d036994f8ab2d77cdc207"></CardTitle>} className={Theme.components.demo.backgroundColor} textClassName={Theme.components.demo.textColor} title={Lang.title} 
                        actions={[
                            <Button key="signup_button" onClick={this.onSignup} waves='light'>{Lang.signup_button}<Icon right>person_add</Icon></Button>
                        ]}>

                        {Lang.content}
                        <div>
                            <Input name="firstname" onChange={this.onChange} label={Lang.firstname} s={6} />
                            <Input name="familyname" onChange={this.onChange} label={Lang.familyname} s={6} />
                            <Input name="email" onChange={this.onChange} label={Lang.email} s={12} />
                            <Input name="password" onChange={this.onChange} type="password" label={Lang.password} s={12} />
                            <Input name="passwordre" onChange={this.onChange} type="password" label={Lang.passwordre} s={12} />
                        </div>
                    </Card>
                </Col>
            </Row>
        )
    }
}

// Component PropTypes
signupPanel.propTypes = {
    singupAccount: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    account: state.account
});

// TODO: https://www.youtube.com/watch?v=93p3LxR9xfM
// REDO: Tutorial and check the mapStateToProps thing i dont get that :-D
// REDO: And there is a State why? i thaught that redux will replace the state ?

// Component Export
export default connect(null, { signupAccount })(signupPanel);

