import { combineReducers } from 'redux';

import auth from './auth/reducer';
import signup from './signup/reducer';

export default combineReducers({ auth, signup });
