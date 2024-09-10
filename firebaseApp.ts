// Import the functions you need from the SDKs you need
// import { getAnalytics } from 'firebase/analytics';
import { FirebaseApp, getApp, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getMessaging } from 'firebase/messaging';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export let app: FirebaseApp;
export let analytics: any;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_APP_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_APP_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_APP_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_APP_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_APP_MEASUREMENT_ID,
};

// Initialize Firebase
try {
    app = getApp('app');
} catch (error) {
    app = initializeApp(firebaseConfig, 'app');
}

export const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
// analytics = getAnalytics(app);
export const auth = getAuth(app);
export const messaging = getMessaging(app);