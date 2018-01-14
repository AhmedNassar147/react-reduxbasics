import { createStore, combineReducers } from 'redux';
import usersReducer from './modules/reducers/userReducer';
import optionReducer from './modules/reducers/optionReducer';
import datePickerReducer from './modules/reducers/datePickerReducer';

export default createStore(combineReducers({ usersReducer, optionReducer, datePickerReducer }), {});
