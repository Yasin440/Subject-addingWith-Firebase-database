import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
    apiKey: "AIzaSyBdLpKWVr7urdS-k6gUp811T4wi6oYQTxg",
    authDomain: "student-subject.firebaseapp.com",
    databaseURL: "https://student-subject-default-rtdb.firebaseio.com",
    projectId: "student-subject",
    storageBucket: "student-subject.appspot.com",
    messagingSenderId: "365515242154",
    appId: "1:365515242154:web:28228922ab0917ba37aed3"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);
export default database;