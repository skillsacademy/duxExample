import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import {calendar}  from './calendar/reducers.jsx';

const combinedCustomReducers =  combineReducers({    
	calendar,
	routing: routerReducer //not forgetting to add routerRedcuer to the mix too..
});

export default combinedCustomReducers

