export function signInRequest(email, pass) {
    return {
        type: '@auth/SIGN_IN_REQUEST',
        payload: { email, pass },
    };
}

export function signInSucess(token, user) {
    return {
        type: '@auth/SIGN_IN_SUCESS',
        payload: { token, user },
    };
}
