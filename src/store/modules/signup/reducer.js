import produce from 'immer';
import { toast } from 'react-toastify';

const INITIAL_STATE = {};

export default function auth(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@auth/SIGN_UP_SUCESS':
            toast.success('Conta Criada com Sucesso');
            return state;
        default:
            return state;
    }
}
