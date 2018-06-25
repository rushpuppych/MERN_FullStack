import axios from 'axios';
import sha256 from 'sha256';

/**
 * signinAccount
 * This Action is used to login a user.
 */
export const signinAccount = (signinData) => dispatch => {
    // Hash Password and PasswordRe
    signinData.password = sha256(signinData.password);

    // Send Signin Data
    axios.post('http://localhost:4000/account/signin/', signinData).then((response) => {
        if(response.data.status === 'true') {
            window.location.reload(false); 
        } else {
            alert(response.data.error_code)
        }
    }).catch((error) => {
        alert('technical_error');
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
    axios.post('http://localhost:4000/account/signup/', signupData).then((response) => {
        if(response.data.status === 'true') {
            alert('account_created');
        } else {
            alert(response.data.error_code)
        }
    }).catch((error) => {
        alert('technical_error');
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
