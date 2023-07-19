import admin from 'firebase-admin';

const sendNotification = async (fcm: any, message: any) => {
    const notification = {
        token: fcm,
        notification: {
            title: 'New course alert',
            body: message
        }
    }
    const not = await admin.messaging().send(notification);
    console.log(`Push notification sent ${not}`)
}

export default sendNotification;