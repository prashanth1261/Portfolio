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
      apiKey: '*****************************',
      authDomain: '*****************************',
      databaseURL: '***************************',
      projectId: '*****************************',
      storageBucket: '****************************',
      messagingSenderId: '***********************'
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
   }
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
