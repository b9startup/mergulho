import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  try {
    const response = yield call(api.post, '/sessions', { email, password });

    const { token } = response.data;

    yield put(signInSuccess(token));
  } catch (error) {
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
