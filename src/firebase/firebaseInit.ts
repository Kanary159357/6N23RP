import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseApp = initializeApp({
    apiKey: import.meta.env.PUBLIC_API_KEY,
    authDomain: import.meta.env.PUBLIC_AUTH_DOMAIN,
    databaseURL: import.meta.env.PUBLIC_DATABASE_URL,
    projectId: import.meta.env.PROJECT_ID,
    storageBucket: import.meta.env.PUBLIC_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.PUBLIC_MESSAGE_SENDER_ID,
    appId: import.meta.env.PUBLIC_APP_ID,
    measurementId: import.meta.env.PUBLIC_MEASUREMENT_ID
});

const db = getFirestore(firebaseApp);

export default db;

const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
};

export const signout = async () => {
    return await auth.signOut();

}