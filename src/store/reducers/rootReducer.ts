import theme from './themeReducer';
import weather from './weatherReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ theme, weather });
export default rootReducer;
