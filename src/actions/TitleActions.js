import firebase from 'firebase';

import {
    TITLE_UPDATE,
    TITLE_FETCH_SUCCESS,
    TITLE_SAVE_SUCCESS
} from './types';

const deleteData = () => {
    const { currentUser } = firebase.auth();
     firebase.database().ref(`/users/${currentUser.uid}/Titles`).remove();
 };

export const titleCreate = ({ Title }) => {
    const { currentUser } = firebase.auth();
    deleteData();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/Titles`)
          .push({ Title })
          .then(() => {
        dispatch({ type: TITLE_SAVE_SUCCESS });
      }
    );
  };
};

export const titleUpdate = ({ prop, value }) => {
    return {
      type: TITLE_UPDATE,
      payload: { prop, value }
    };
};

export const titleFetch = () => {
    //const { currentUser } = firebase.auth();
    //const { authData } = firebase.auth();
    return (dispatch) => {
      firebase.database().ref('/users/')
        .on('value', snapshot => {
            dispatch({ type: TITLE_FETCH_SUCCESS, payload: snapshot.val() });
            console.log('snapshot', snapshot.val());
        });
    };
  };
  