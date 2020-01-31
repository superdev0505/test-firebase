import React from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase/app';

import 'firebase/database';

import { createStore, combineReducers } from 'redux';
import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase';

import './App.css';

import User from './component/user.component';

const fbConfig = {
  apiKey: "AIzaSyCisAeVD53UWbQSQhrjPNPw4CTcOmf0BIk",
  authDomain: "test-firebase-acbe3.firebaseapp.com",
  databaseURL: "https://test-firebase-acbe3.firebaseio.com",
}

try {
  firebase.initializeApp(fbConfig);
  firebase.database();
} catch (err) {}

const rootReducer = combineReducers({
  firebase: firebaseReducer
})
const initialState = {}

const store = createStore(rootReducer, initialState)

const rrfProps = {
  firebase,
  config: {
    userProfile: "users"
  },
  dispatch: store.dispatch
}

const App = () => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <User/>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
