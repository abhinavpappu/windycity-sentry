import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD_OGUY-dSFzi7v9nFZ5iCgIzjZTT8e3l0",
  authDomain: "windyhacks-9b684.firebaseapp.com",
  databaseURL: "https://windyhacks-9b684.firebaseio.com",
  projectId: "windyhacks-9b684",
  storageBucket: "windyhacks-9b684.appspot.com",
  messagingSenderId: "473432639923",
  appId: "1:473432639923:web:7685b9dc5316d6eb"
};

var uiConfig = {
  signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  tosUrl: '<your-tos-url>',
  // Privacy policy url/callback.
  privacyPolicyUrl: function() {
    window.location.assign('<your-privacy-policy-url>');
  }
};

// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore();

export const auth = firebase.auth();

// Export types that exists in Firestore
const { TimeStamp, GeoPoint } = firebase.firestore;
export { TimeStamp, GeoPoint };

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true });