import * as firebase from "firebase";

import FirebaseConfig from "../config/firebase";

firebase.initializeApp(FirebaseConfig);
//
// const databaseRef = firebase.database().ref();
// export const usersRef = databaseRef.child("users");

export const register = (user) => {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(u => {
            alert('Registration successful!')
        })
        .catch(error => {
            switch (error.code) {
                case 'auth/email-already-in-use':
                    alert(`Email address ${user.email} already in use.`)
                    break;
                case 'auth/invalid-email':
                    alert(`Email address ${user.email} is invalid.`);
                    break;
                case 'auth/operation-not-allowed':
                    alert(`Error during sign up.`);
                    break;
                case 'auth/weak-password':
                    alert('Password is not strong enough. Add additional characters including special characters and numbers.');
                    break;
                default:
                    alert(error.message);
            }
        });

}

export const login = (user) => {
    // usersRef.orderByChild("email").equalTo(user.email).on("value", (snapshot) => {
    //     // console.log(snapshot.val())
    // }, (errorObject) => {
    //     console.log("The read failed: " + errorObject.code);
    // });

    // firebase.auth().onAuthStateChanged(user => {
    //     console.log(user)
    //     if (user) {
    //         // User is signed in.
    //     } else {
    //         // No user is signed in.
    //     }
    // });
}