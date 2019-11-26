import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  loading: false,
  signed: false,
};

export default function auth(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  return produce(state, draft => {
    switch (type) {
      default:
    }
  });
}
