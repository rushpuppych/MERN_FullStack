import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { Row, Navbar } from 'react-materialize';
import Aux from '../../../hoc/ReactAux';
import Cookie from 'cookie-machine';
import Theme from '../../../assets/themes/Default';
import LoginPanel from '../../../components/Account/LoginPanel/LoginPanel';
import SignupPanel from '../../../components/Account/SignupPanel/SignupPanel';
import PasswordRestorePanel from '../../../components/Account/PasswordRestorePanel/PasswordRestorePanel';
import PropTypes from 'prop-types'; 

class PublicPage extends Component {
    // contextTypes
    static contextTypes = {
        t: PropTypes.func.isRequired
    };

    getLanguage() {
        let languageCode = Cookie.get('cp_lang');
        switch(languageCode) {
            case 'us':
                languageCode = 'de';
                break;
            case 'de':
                languageCode = 'us';
                break;
            default:
                languageCode = 'de'; 
        }
        return languageCode;
    }

    setLanguage(e) {
        if(Cookie.get('cp_lang') === 'us') {
            Cookie.set('cp_lang', 'de');
        } else {
            Cookie.set('cp_lang', 'us');
        }
        window.location.reload();
    }

    render() {
        const languageCode = 'flag-icon flag-icon-' + this.getLanguage();
        return (
            <Aux>
                <Row>    
                    <Navbar className={Theme.containers.layouts.publicPage.backgroundColor} brand='MERN-Stack' fixed right>
                        <li><Link to="/">{this.context.t('Anmeldung')}</Link></li>
                        <li><Link to="/signup">{this.context.t('Registrierung')}</Link></li>
                        <li><Link to="/restore">{this.context.t('Wiederherstellung')}</Link></li>
                        <li><div onClick={this.setLanguage} style={{cursor:'pointer'}}><span className={languageCode}></span></div></li>
                    </Navbar>
                </Row>

                <main>
                    <AnimatedSwitch atEnter={{ opacity: 0 }} atLeave={{ opacity: 0 }} atActive={{ opacity: 1 }} className="switch-wrapper">
                        <Route path="/" exact component={LoginPanel} />
                        <Route path="/signin" exact component={LoginPanel} />
                        <Route path="/signup" exact component={SignupPanel} />
                        <Route path="/restore" exact component={PasswordRestorePanel} />
                    </AnimatedSwitch>
                </main>
            </Aux>
        );
    }
};

export default PublicPage;