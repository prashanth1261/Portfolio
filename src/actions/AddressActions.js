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

export const addressCreate = ({ FullName, Street, Phone, Email, State, City, Zip, University, Title, Degree, Major, GPA, LinkedIn, GitHub }) => {
  const { currentUser } = firebase.auth();
    deleteData();
  return () => {
      firebase.database().ref(`/users/${currentUser.uid}/Address`)
        .push({ FullName, Street, Phone, Email, State, City, Zip, University, Title, Degree, Major, GPA, LinkedIn, GitHub });
};
};


export const addressUpdate = ({ prop, value }) => {
    return {
      type: ADDRESS_UPDATE,
      payload: { prop, value }
    };
};

export const addressFetch = () => {
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
