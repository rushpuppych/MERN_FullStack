import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { Row, Navbar } from 'react-materialize';
import Aux from '../../../hoc/ReactAux';
import Cookie from 'cookie-machine';
import Theme from '../../../assets/themes/Default';
import LogoutPanel from '../../../components/Account/LogoutPanel/LogoutPanel';
import PropTypes from 'prop-types'; 

class PrivatePage extends Component {
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
        return (
            <Aux>
                <Row>
                    <Navbar className={Theme.containers.layouts.publicPage.backgroundColor} brand='MERN-Stack' fixed right>
                        <li><Link to="/logout">{this.context.t('Abmelden')}</Link></li>
                    </Navbar>
                </Row>
                <main>
                    <h1>Private Area</h1>
                    <p>This could be your Application!</p>
                    <br />
                    <strong>Your current language, is:</strong><br/>
                    {this.context.t("Test Text")}<br/>

                </main>
                <main>
                    <AnimatedSwitch atEnter={{ opacity: 0 }} atLeave={{ opacity: 0 }} atActive={{ opacity: 1 }} className="switch-wrapper">                    
                        <Route path="/logout" exact component={LogoutPanel} />
                    </AnimatedSwitch>
                </main>                
            </Aux>
        );
    }
};

export default PrivatePage;