import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseApp = initializeApp({
    apiKey: `${process.env.NEXT_PUBLIC_FIREBASE_APIKEY}`,
    authDomain: 'tekken-info.firebaseapp.com',
    databaseURL: 'https://tekken-info-default-rtdb.firebaseio.com',
    projectId: 'tekken-info',
    storageBucket: 'tekken-info.appspot.com',
    messagingSenderId: `${process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER}`,
    appId: `${process.env.NEXT_PUBLIC_FIREBASE_APP_ID}`,
});

const db = getFirestore(firebaseApp);

export default db;

const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithRedirect(auth, googleProvider)
        .then(() => {
            console.log('안녕하세요');
        })
        .catch((err) => {
            console.log(err);
            alert('로그인 중 오류 발생. 에러 코드 ' + err);
        });
};

export const logOut = () => {
    auth.signOut()
        .then(() => {
            console.log('logged out');
        })
        .catch((error) => {
            console.log(error.message);
        });
};
