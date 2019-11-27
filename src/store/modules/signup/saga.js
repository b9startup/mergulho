import { takeLatest, put, all, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { signUpSucess } from './actions';
import history from '~/services/history';

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

export default all([takeLatest('@auth/SIGN_UP_REQUEST', signUp)]);
