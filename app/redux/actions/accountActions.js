import { SIGNIN_ACCOUNT } from '../actions/types'; 
import config from '../../app.config';
import axios from 'axios';
import sha256 from 'sha256';
import util from '../../assets/scripts/util';

/**
 * signinAccount
 * This Action is used to login a user.
 */
export const signinAccount = (localState) => dispatch => {
    // Hash Password and PasswordRe
    let signinData = {...localState};
    signinData.password = sha256(signinData.password);

    // Send Signin Data
    axios.post(config.paths.api + 'account/signin/', signinData).then((response) => {
        if(response.data.status === 'true') {
            dispatch({
                type: SIGNIN_ACCOUNT,
                payload: response.data.payload
            });
            window.location.reload(false); 
        } else {
            util.showToast(response.data.error_code);
        }
    }).catch((error) => {
        util.showToast('Oops!: technical_error');
    })
}

/**
 * signupAccount
 * This action is used to signup a user.
 */
export const signupAccount = (signupData) => dispatch => {
    // Hash Password and PasswordRe
    signupData.password = sha256(signupData.password);
    signupData.passwordre = sha256(signupData.passwordre);

    // Send Signup Data
    axios.post(config.paths.api + 'account/signup/', signupData).then((response) => {
        if(response.data.status === 'true') {
            alert('account_created');
            util.showModal('Account Created!', 'Your user account was successfully created.<br> Please check your mailbox and vertificate your account.');
        } else {
            util.showToast(response.data.error_code);
        }
    }).catch((error) => {
        util.showToast('Oops!: technical_error');
    })
}

/**
 * signupAccount
 * This action is used to signup a user.
 */
export const resetAccountPassword = (resetData) => dispatch => {
    // Send Signup Data
    axios.get(config.paths.api + 'account/reset/' + resetData.email).then((response) => {
        if(response.data.status === 'true') {
            util.showModal('Password Reseted!', 'Your account password was successfully reseted.<br> Please check your mailbox for the new password.');
        } else {
            util.showToast(response.data.error_code);
        }
    }).catch((error) => {
        util.showToast('Oops!: technical_error');
    })
}

// this is only needed on state changes
// import { SIGNIN_ACCOUNT, SIGNUP_ACCOUNT } from '../actions/types'; 
/* no dispatch needet because no store change
dispatch({
    type: SIGNUP_ACCOUNT,
    payload: response
});
*/
