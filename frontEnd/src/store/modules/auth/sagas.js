import { takeLatest, put, all } from 'redux-saga/effects';

import { signInSucess } from './actions';
import history from '~/services/history';

export function* signIn({ payload }) {
    yield put(signInSucess());
    history.push('home');
}

export function* signInFailured() {}

export default all([
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_FAILURED', signInFailured),
]);
