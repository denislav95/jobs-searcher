import * as firebase from "firebase";

import FirebaseConfig from "../config/firebase";

firebase.initializeApp(FirebaseConfig);

export const register = (user) => {
    return new Promise((resolve, reject) => {
        firebase.auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(response => {
                writeUserData(response.user.uid, user)
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

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                const jobDataRef = firebase.database().ref('job_data/' + user.uid);
                jobDataRef.on('value', function(snapshot) {
                    const job_data = snapshot.val()
                    return resolve({
                        ...user,
                        name: job_data.name,
                        job_data: job_data.data
                    })
                });

            } else {
                return resolve(null)
            }
        });
    })
}


export const logout = () => {
    return firebase.auth().signOut()
}

function writeUserData(userId, user) {
    return firebase.database().ref('job_data/' + userId).set({
        email: user.email,
        name: user.name,
        data: user.data || []
    });
}

export default {register, login, checkUserLogged, logout, getCurrentUser}