import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, SIGN_UP_USER_FAIL, LOGIN_USER, LOGIN_USER_FAIL } from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state,
          user: action.payload,
          error: '',
          loading: false,
          email: '',
          password: ''
      };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Incorrect Username/Password', loading: false };
    case SIGN_UP_USER_FAIL:
          return { ...state, error: 'Account already exists', loading: false, email: '', password: '' };
    default:
      return state;
  }
};
