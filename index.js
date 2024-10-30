const { initializeApp } = require('firebase-admin/app');
const admin = require('firebase-admin');
const serviceAccount = require('./test-run-f6d40-firebase-adminsdk-xmrw5-3c7e631a74.json');

const { getMessaging } = require('firebase-admin/messaging');

const registrationToken = process.env.REGISTERATION_TOKEN;

initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: 'test-run-f6d40',
})

const message = {
    notification: {
        title: "Offline Notification from Nodejs",
        body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    },
    token: registrationToken,
};

// Send a message to the device corresponding to the provided
// registration token.
getMessaging().send(message)
    .then((response) => {
        // Response is a message ID string.
        console.log('Successfully sent message:', response);
    })
    .catch((error) => {
        console.log('Error sending message:', error);
    });