// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; //authentication functionality
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use (authentication goes here)
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5toV3uDZWU4ARq3i1h4Yl5Ui0vBOZq4E",
  authDomain: "class-project-5a909.firebaseapp.com",
  projectId: "class-project-5a909",
  storageBucket: "class-project-5a909.firebasestorage.app",
  messagingSenderId: "684796232560",
  appId: "1:684796232560:web:5b6566289ffb3db5db85b5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//app variable reresents firebase app instance

//initialisa all our services for our firebase app
// Initialize Firebase Authentication and get a reference to the service
//auth variable links to the authentication of my firrebase app
export const auth = getAuth(app);

//HOMEWORK:
//1. Create the RegistrationScreen UI
//2. Create the registration authentication function in authServices
//3. Add the functionality to your registration screen
//4. add effient navigation between the login and registration screens (stacks & navigation functions)
//5. BONUS: try and add the user data to the database (if applicable) after registration
//6. BONUS: add useContext for auth state management
//7. BONUS: fix the localstorage issue with we get in the terminal
