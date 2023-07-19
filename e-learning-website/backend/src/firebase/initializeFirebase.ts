import { initializeApp } from 'firebase-admin/app';
import admin from 'firebase-admin';
import path from 'path';

const initializeFirebaseApp = () => {
    const serviceAccount = path.join(`${__dirname}/config/e-learning-app-e1477-firebase-adminsdk-adugi-ff624c9bf8.json`)
    initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

export default initializeFirebaseApp;