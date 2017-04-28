import { combineReducers } from 'redux';
import ReducerLists from './reducer_lists';

const rootReducer = combineReducers({
	lists: ReducerLists
});

export default rootReducer;