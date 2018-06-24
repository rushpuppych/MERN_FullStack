import { SIGNIN_ACCOUNT, SIGNUP_ACCOUNT } from '../actions/types'; 
// RESTORE_ACCOUNT, UNLOCK_ACCOUNT
import axios from 'axios';

/**
 * signinAccount
 * This Action is used to login a user.
 */
export const signinAccount = () => dispatch => {
    // AXIOS Request for FetchState
    let restData = {data_from: 'the_rest_interface'};
    dispatch({
        type: SIGNIN_ACCOUNT,
        payload: restData
    });
}

/**
 * signupAccount
 * This action is used to signup a user.
 */
export const signupAccount = () => dispatch => {
    axios.post('http://localhost:4000/account/signup/').then((response) => {
        dispatch({
            type: SIGNUP_ACCOUNT,
            payload: response
        });
    })
}
