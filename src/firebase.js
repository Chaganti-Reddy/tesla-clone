import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCgZal37bhMQFJJaEbmNc91dRNMvbp1Gqw",
  authDomain: "tesla-clone-d37c6.firebaseapp.com",
  projectId: "tesla-clone-d37c6",
  storageBucket: "tesla-clone-d37c6.appspot.com",
  messagingSenderId: "24866084273",
  appId: "1:24866084273:web:efe3aa81635f2103c4d990",
  measurementId: "G-09NKBKKSY7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }
