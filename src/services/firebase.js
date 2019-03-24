import * as firebase from "firebase";

import FirebaseConfig from "../config/firebase";

firebase.initializeApp(FirebaseConfig);
//
// const databaseRef = firebase.database().ref();
// export const usersRef = databaseRef.child("users");

export const register = (user) => {
    firebase.auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(u => {
            alert('Registration successful!')
        })
        .catch(error => {
            alert(error.message);
        });

}

export const login = (user) => {
    firebase.auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(u => {
            const loggedUser = { email: u.user.email };
            localStorage.setItem('user', JSON.stringify(loggedUser));
            alert('Login successful!')
        })
        .catch(function(error) {
            alert(error.message)
    });
}

export const checkUserLogged = (callback) => {

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            // User is signed in.
            return callback(true)
        } else {
            // No user is signed in.
            return callback(false)
        }
    });
}

export const logout = () => {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        alert('Logout successful!')
    }).catch(function(error) {
        // An error happened.
        alert('Logout unsuccessful!')
    });
}

export default { register, login, checkUserLogged, logout };