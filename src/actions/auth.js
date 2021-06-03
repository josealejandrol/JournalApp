import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import { uiFinishLoading, uiStartLoading } from "./ui";

export const startLoginEmailPasword = (email, password) => (dispatch) => {
  dispatch(uiStartLoading())

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then( ({user}) => {
    dispatch(
      login(user.uid, user.displayName)
    );
    dispatch(uiFinishLoading());
  })
  .catch( e => {
    console.error( e );
    dispatch(uiFinishLoading());
  });

};

export const startRegisterWithEmailPasswordName =
  (email, password, name) => (dispatch) => {
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( async ({user}) => {

      await user.updateProfile({
        displayName: name
      })

      // console.log(user);

      dispatch(
        login(user.uid, user.displayName)
      );

    }).catch(e => console.error(e))
};

export const startGoogleLogin = () => (dispatch) => {
  dispatch(uiStartLoading());

  firebase
    .auth()
    .signInWithPopup(googleAuthProvider)
    .then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
      dispatch(uiFinishLoading());
    })
    .catch( e => {
      console.log(e);
      dispatch(uiFinishLoading());
    })
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

export const startLogout = () => async (dispatch) => {
  await firebase.auth().signOut();

  dispatch( logout() );
}

export const logout = () => ({
  type: types.logout
})