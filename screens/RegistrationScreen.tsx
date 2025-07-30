// TODO: Create Register Screen & Register Functionality

import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { registerUser } from '../services/authService';

const RegistrationScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    registerUser(email, password);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>

        <TextInput
          style={styles.inputField}
          placeholder="Your Email"
          onChangeText={setEmail}
          value={email}
        />

        <TextInput
          style={styles.inputField}
          placeholder="Your Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    fontSize: 30,
    marginBottom: 20
  },
  inputField: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 15,
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    marginTop: 30
  },
  buttonText: {
    textAlign: 'center',
    color: 'white'
  }
});
