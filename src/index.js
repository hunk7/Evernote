import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  	apiKey: "AIzaSyBwawoHNR-tB7dJwUN3k91lJPOraSyMLaQ",
	authDomain: "evernote-clone-9cd8a.firebaseapp.com",
	databaseURL: "https://evernote-clone-9cd8a.firebaseio.com",
	projectId: "evernote-clone-9cd8a",
	storageBucket: "evernote-clone-9cd8a.appspot.com",
	messagingSenderId: "830051560992",
	appId: "1:830051560992:web:686724924ceba83b4b9645",
	measurementId: "G-JQGCWV5R6K"
});

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
