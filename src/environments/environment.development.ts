export const environment = {
    production: false,
    firebase: {
        apiKey: process.env["FIREBASE_API_KEY"],
        authDomain: "twa-marketplace.firebaseapp.com",
        projectId: "twa-marketplace",
        storageBucket: "twa-marketplace.appspot.com",
        messagingSenderId: process.env["FIREBASE_SENDER_ID"],
        appId: process.env["FIREBASE_APP_ID"],
        measurementId: process.env["FIREBASE_MEASUREMENT_ID"]
    }
};