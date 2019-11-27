export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
