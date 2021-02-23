import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app';
import { store } from '~/redux/store';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { firebaseConfig } from '~/config';
import { createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';

// ----------------------------------------------------------------------

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
//   firebase.firestore();
// }

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyB82gQg9j3TOp9PvetTZg2hwUzlNNTfNTc",
      authDomain: "minimal-letsbee.firebaseapp.com",
      projectId: "minimal-letsbee",
      storageBucket: "minimal-letsbee.appspot.com",
      messagingSenderId: "508201824530",
      appId: "1:508201824530:web:76597a4cbc48732bfa03cb",
      measurementId: "G-S5HR4K75FL"
    }
  );
  firebase.firestore();
}

const rrfProps = {
  firebase,
  config: {
    userProfile: 'users',
    useFirestoreForProfile: true
  },
  dispatch: store.dispatch,
  createFirestoreInstance
};

const ADMIN_EMAILS = ['demo@minimals.cc'];

// ----------------------------------------------------------------------

function FirebaseProvider({ children }) {
  const { profile } = useSelector(state => state.firebase);

  useEffect(() => {
    const Initialise = async () => {
      try {
        firebase.auth().onAuthStateChanged(user => {
          if (user && isLoaded(profile) && !profile.role) {
            firebase
              .firestore()
              .collection('users')
              .doc(user.uid)
              .set(
                {
                  role: ADMIN_EMAILS.includes(user.email) ? 'admin' : 'user'
                },
                { merge: true }
              );
          }
        });
      } catch (error) {
        console.log(error);
      }
    };

    Initialise();
  }, [profile]);

  return (
    <ReactReduxFirebaseProvider {...rrfProps}>
      {children}
    </ReactReduxFirebaseProvider>
  );
}

export default FirebaseProvider;
