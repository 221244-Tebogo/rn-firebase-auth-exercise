  import { StatusBar } from 'expo-status-bar';
  import React, { useState, useEffect } from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import LoginScreen from './screens/LoginScreen';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import { NavigationContainer } from '@react-navigation/native';
  import ProfileScreen from './screens/ProfileScreen';
  import RegistrationScreen from './screens/RegistrationScreen';
  import { onAuthStateChanged } from 'firebase/auth';
  import { auth } from './firebase';

  const Stack = createNativeStackNavigator();

  export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
      // You can check login status here in the future

   useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoggedIn(true);
      console.log("user logged in already");
    } else {
      setIsLoggedIn(false);
      console.log("user is logged out");
    }
  });
    }, []);

    // TODO: RESERACH HOW TO CONVERT THIS CODE TO USE A useContext HOOK (BETTER PRACTICE)

    return (
      <NavigationContainer>
        {isLoggedIn ? (
          <Stack.Navigator>
            {/* checks if user is logged in */}
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
             <Stack.Screen name="Register" component={RegistrationScreen} /> 
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
  }

  //1. setup navigation when user is logged out
  //2. setup navigation when user is logged in
  //3. listen to either a user is logged in or not

