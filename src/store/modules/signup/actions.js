export function signUpRequest(name, email, pass) {
    return {
        type: '@auth/SIGN_UP_REQUEST',
        payload: { name, email, pass },
    };
}

export function signUpSucess() {
    return {
        type: '@auth/SIGN_UP_SUCESS',
    };
}