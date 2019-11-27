import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  try {
    const response = yield call(api.post, '/sessions', { email, password });

    const { token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    toast.info('Você foi logado com sucesso!');
    yield put(signInSuccess(token));
  } catch (error) {
    toast.error(error.response.data.error);
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  const { name, email, password } = payload;

  try {
    const response = yield call(api.post, '/users', { name, email, password });

    const { token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    toast.info('Usuário cadastrado com sucesso!');
    history.push('/login');
  } catch (error) {
    toast.error(error.response.data.error);
    yield put(signFailure());
  }
}

export function signOut() {
  history.push('/login');
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('persist/REHYDRATE', setToken),
]);
