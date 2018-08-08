import { combineReducers } from 'redux';
import accountReducer from './accountReducer';

import {i18nState} from "redux-i18n";

// Register all Reducers
 export default combineReducers({
     account: accountReducer,
     i18nState
 });