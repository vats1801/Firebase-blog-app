import * as types from "../actions/authActions";
import { auth } from "../../firebase-config";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

const logoutUser = (payload) => {
  return {
    type: types.SIGN_OUT,
    payload,
  };
};

const loginUser = (payload) => {
  return {
    type: types.SIGN_IN,
    payload,
  };
};

export const signInUser = (email, password, setSuccess) => (dispatch) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch(
        loginUser({
          uid: user.user.uid,
          email: user.user.email,
          name: user.user.displayName,
        })
      );
      setSuccess(true);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signUpUser = (name, email, password, setSuccess) => (dispatch) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      auth.currentUser
        .updateProfile({
          displayName: name,
        })
        .then(async () => {
          const currentUser = await auth.currentUser;
          dispatch(
            loginUser({
              uid: currentUser.uid,
              name: currentUser.displayName,
              email: currentUser.email,
            })
          );
          setSuccess(true);
        })
        .catch((error) => {
          console.log(user);
        });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signOutUser = (setSuccess) => (dispatch) => {
  auth
    .signOut()
    .then(() => {
      dispatch(logoutUser());
      setSuccess(true);
    })
    .catch((error) => {
      alert("something wrong");
    });
};

export const checkedIsLoggedIn = () => (dispatch) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch(
        loginUser({
          uid: user.uid,
          email: user.email,
          name: user.displayName,
        })
      );
    }
  });
};
