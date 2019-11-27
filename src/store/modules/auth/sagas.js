import { all, takeLatest } from 'redux-saga/effects';

import history from '~/services/history';

export function* signIn({ payload }) {
  const { email, password } = payload;

  console.log(email, password);
}

export function signOut() {
  history.push('/login');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
