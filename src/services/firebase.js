import * as firebase from "firebase";

import FirebaseConfig from "../config/firebase";

firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const usersRef = databaseRef.child("users");

export const register = (user) => {
    let validated = false;
    usersRef.orderByChild("email")
        .equalTo(user.email)
        .on("value", (snapshot) => {
            if (snapshot.val() && !validated) {
                alert("Email already taken!");
                validated = true;
            } else if (!snapshot.val()){
                usersRef.push().set(user);
                alert("Registration successfull!");
                validated = true;
            }
        }, (errorObject) => {
            console.log("The read failed: " + errorObject.code);
        });

}

export const login = (user) => {
    usersRef.orderByChild("email").equalTo(user.email).on("value", (snapshot) => {
        // console.log(snapshot.val())
    }, (errorObject) => {
        console.log("The read failed: " + errorObject.code);
    });
}