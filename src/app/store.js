import { createStore, combineReducers } from 'redux';
import appRreducer from './reducers/appReducer'
export default createStore(combineReducers({ appRreducer }), {});
