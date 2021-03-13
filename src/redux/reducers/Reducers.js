import { combineReducers } from 'redux';
import MainModuleReducer from '../../views/screens/mainmodule/redux/MainModuleReducer';

const AppsReducers = combineReducers({
  mainModule: MainModuleReducer
});

export default AppsReducers;
