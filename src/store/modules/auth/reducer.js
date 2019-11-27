import produce from 'immer';
import { toast } from 'react-toastify';

const INITIAL_STATE = {
    token: null,
    signed: false,
    loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@auth/SIGN_IN_SUCESS': {
                draft.token = action.payload.token;
                draft.signed = true;
                break;
            }
            case '@auth/SIGN_UP_SUCESS': {
                toast.success('Conta Criada com Sucesso');
                break;
            }
            case '@auth/SIGN_OUT': {
                draft.token = null;
                draft.signed = false;
                break;
            }

            default:
        }
    });
}
