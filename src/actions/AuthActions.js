import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER, LOGIN_USER_SUCCESS, SIGN_UP_USER_FAIL, SIGN_UP_USER, LOGIN_USER_FAIL } from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
  dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
  };
};

export const signUp = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: SIGN_UP_USER });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => SignUpUserSuccess(dispatch, user))
      .catch(() => signUpUserFail(dispatch));
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
       type: LOGIN_USER_SUCCESS,
       payload: user,
     });
    Actions.home();
};

export const signUpUserFail = (dispatch) => {
    dispatch({ type: SIGN_UP_USER_FAIL });
};

const SignUpUserSuccess = (dispatch, user) => {
    dispatch({
       type: LOGIN_USER_SUCCESS,
       payload: user,
     });
    Actions.signupSuccessGreetings();
};
