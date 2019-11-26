import { all, takeLatest } from 'redux-saga/effects';

export function* signIn({ payload }) {
  const { email, password } = payload;

  console.log(email, password);
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
