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

export function signOut() {
    return {
        type: '@auth/SIGN_OUT',
    };
}
