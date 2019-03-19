import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDRxr6HLwMNLi9aXQedDlOsiSL3WWszLg0',
      authDomain: 'portfolio-7bff5.firebaseapp.com',
      databaseURL: 'https://portfolio-7bff5.firebaseio.com',
      projectId: 'portfolio-7bff5',
      storageBucket: 'portfolio-7bff5.appspot.com',
      messagingSenderId: '183141657838'
    };
    firebase.initializeApp(config);
  }

    render() {
      return (
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
      );
    }
}

export default App;
