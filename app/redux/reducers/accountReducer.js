import { SIGNIN_ACCOUNT, SIGNUP_ACCOUNT } from '../actions/types'; 
// RESTORE_ACCOUNT, UNLOCK_ACCOUNT

// Initial State
const initialState = {
    account: {}
};

// Supscriber

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN_ACCOUNT:
            return {
                ...state,
                account: action.payload
            }

        case SIGNUP_ACCOUNT:
            // nostate change on singup.
            return {}

        default:
            return state;
    }
};

// Dispatcher

export default reducer;