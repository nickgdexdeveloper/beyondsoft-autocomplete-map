import { combineReducers } from 'redux';


import mapReducer from './map';




const options = {
	map: mapReducer,
};


export default combineReducers(options);