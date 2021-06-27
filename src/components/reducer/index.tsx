import { combineReducers } from 'redux';
import User from './user_reducer';
import Toggle from './ui_reducer';
const rootReducer = combineReducers({
  User,
  Toggle,
});

export default rootReducer;
