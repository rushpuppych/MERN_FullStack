import { combineReducers } from 'redux';
import accountReducer from './accountReducer';

// Register all Reducers
 export default combineReducers({
     account: accountReducer
 });