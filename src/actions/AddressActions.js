import firebase from 'firebase';

import {
  ADDRESS_UPDATE,
  ADDRESS_FETCH_SUCCESS,
  ADDRESS_SAVE_SUCCESS,
} from './types';

const deleteData = () => {
   const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/Address`).remove();
};

export const addressCreate = ({ FullName, Street, Phone, Email, State, City, Zip }) => {
  const { currentUser } = firebase.auth();
    deleteData();
  return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/Address`)
        .push({ FullName, Street, Phone, Email, State, City, Zip })
        .then(() => {
      dispatch({ type: ADDRESS_SAVE_SUCCESS });
    }
  );
};
};


export const addressUpdate = ({ prop, value }) => {
    return {
      type: ADDRESS_UPDATE,
      payload: { prop, value }
    };
};

export const addressFetch = () => {
  //const { currentUser } = firebase.auth();
  //const { authData } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref('/users/')
      .on('value', snapshot => {
          dispatch({ type: ADDRESS_FETCH_SUCCESS, payload: snapshot.val() });
          console.log('snapshot', snapshot.val());
      });
  };
};

export const emptyForm = () => {
  return {
    type: ADDRESS_SAVE_SUCCESS
  };
};
