import { initializeApp, cert } from 'firebase-admin/app';
import { getApps, } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';


const defaultAppConfig = {
    credential: cert({
        "projectId": import.meta.env.PROJECT_ID,
        "privateKey": import.meta.env.PRIVATE_KEY,
        "clientEmail": import.meta.env.CLIENT_EMAIL,
    }
    ),
    databaseURL: "https://tekken-info-default-rtdb.firebaseio.com",
};
if (!getApps().length) initializeApp(defaultAppConfig);
export const serverDB = getFirestore();
