import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";

export const startLoginEmailPasword = (email, password) => (dispatch) => {
  setTimeout(() => {
    dispatch(login(123, "Alejandro"));
  }, 3500);
};

export const startRegisterWithEmailPasswordName =
  (email, password, name) => (dispatch) => {
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( ({user}) => {
        console.log(user);
    })
};

export const startGoogleLogin = () => (dispatch) => {
  firebase
    .auth()
    .signInWithPopup(googleAuthProvider)
    .then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
    });
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};
