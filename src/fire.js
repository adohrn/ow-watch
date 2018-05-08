import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyAfO9_eCZeiBN-b5DwQYd2yqYNOpp_nJxU",
    authDomain: "owl-watch.firebaseapp.com",
    databaseURL: "https://owl-watch.firebaseio.com",
    projectId: "owl-watch",
    storageBucket: "owl-watch.appspot.com",
    messagingSenderId: "420356263263"
  };
const fire = firebase.initializeApp(config)
export default fire;
