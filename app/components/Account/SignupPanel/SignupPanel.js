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

        // Event Binding
        this.onSignup = this.onSignup.bind(this);
    }

    /**
     * Signup Method
     */
    onSignup(e) {
        this.props.signupAccount();
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
                            <Input label={Lang.firstname} s={6} />
                            <Input label={Lang.familyname} s={6} />
                            <Input label={Lang.email} s={12} />
                            <Input type="password" label={Lang.password} s={12} />
                            <Input type="password" label={Lang.passwordre} s={12} />
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

// Component Export
export default connect(null, { signupAccount })(signupPanel);

