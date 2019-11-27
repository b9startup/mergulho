import { takeLatest, put, all, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { signInSucess } from './actions';
import history from '~/services/history';

export function* signIn({ payload }) {
    try {
        const { email, pass } = payload;

        const response = yield call(api.post, '/signin', { email, pass });

        const { token, name } = response.data;

        yield put(signInSucess(token, name));
        history.push('home');
    } catch (err) {
        toast.error('Login Incorreto');
    }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
