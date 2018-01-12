import { createStore, combineReducers } from 'redux';
import usersReducer from './modules/reducers/userReducer';
import optionReducer from './modules/reducers/optionReducer';

export default createStore(combineReducers({ usersReducer, optionReducer }), {});
