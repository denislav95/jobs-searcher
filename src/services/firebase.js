import * as firebase from "firebase";

import FirebaseConfig from "../config/firebase";

firebase.initializeApp(FirebaseConfig);

export const register = (user) => {
    return new Promise((resolve, reject) => {
        firebase.auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(response => {
                writeUserData(response.user.uid, user.email, user.data)
                    .then(res => {
                        return resolve(res)
                    })
                    .catch(err => {
                        return reject(err)
                    })
            })
            .catch(err => {
                return reject(err)
            })
    })
}

export const login = (user) => {
    return firebase.auth()
        .signInWithEmailAndPassword(user.email, user.password)
}

export const checkUserLogged = () => {
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                return resolve(true)
            } else {
                return resolve(false)
            }
        });
    })
}

export const logout = () => {
    return firebase.auth().signOut()
}

function writeUserData(userId, email, data) {
    return firebase.database().ref('job_data/' + userId).set({
        email: email,
        data: data || []
    });
}

export default {register, login, checkUserLogged, logout}