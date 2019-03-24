import * as firebase from "firebase";

import FirebaseConfig from "../config/firebase";

import { toast } from 'react-toastify';

firebase.initializeApp(FirebaseConfig);

export const register = (user) => {
    firebase.auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(u => {
            toast('Registration successful!', { type: toast.TYPE.SUCCESS })
        })
        .catch(error => {
            toast(error.message, { type: toast.TYPE.ERROR })
        })
}

export const login = (user) => {
    firebase.auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(u => {
            const loggedUser = { email: u.user.email }
            localStorage.setItem('user', JSON.stringify(loggedUser))
            toast('Login successful!', { type: toast.TYPE.SUCCESS })
        })
        .catch(function(error) {
            toast(error.message, { type: toast.TYPE.ERROR })
    })
}

export const checkUserLogged = (callback) => {

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            return callback(true)
        } else {
            return callback(false)
        }
    });
}

export const logout = () => {
    firebase.auth().signOut().then(() => {
        toast('Logout successful!', { type: toast.TYPE.SUCCESS })
    }).catch(function(error) {
        toast(error.message, { type: toast.TYPE.ERROR })
    })
}

export default { register, login, checkUserLogged, logout }