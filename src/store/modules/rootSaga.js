import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import signup from './signup/saga';

export default function* rootSaga() {
    return yield all({ auth, signup });
}
