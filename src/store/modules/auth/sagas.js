import { takeLatest, put, all, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { signInSucess, signUpSucess } from './actions';
import history from '~/services/history';

export function* signIn({ payload }) {
    try {
        const { email, pass } = payload;

        const response = yield call(api.post, '/signin', { email, pass });

        const { token, name } = response.data;

        api.defaults.headers.Authorization = `Bearer ${token}`;

        yield put(signInSucess(token, name));
        history.push('home');
    } catch (err) {
        toast.error('Login Incorreto');
    }
}

export function* signUp({ payload }) {
    try {
        const { name, email, pass } = payload;

        if (pass.length < 8) {
            toast.error('Senha precisa ter mais de 8 caracteres');
            return;
        }

        yield call(api.post, '/signup', { name, email, pass });

        yield put(signUpSucess());
        history.push('home');
    } catch (err) {
        toast.error('Dados Incorretos');
    }
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
    takeLatest('persist/REHYDRATE', setToken),
]);
