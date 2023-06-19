import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Image, TextInput, TouchableOpacity, Text } from 'react-native';


const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios.post("http://localhost:3000/api/user/login", { email, password })
      .then(res => {
        //confirm code screen navigate ediyorum
        navigation.navigate("Confirm", {email: email});
      })
      .catch(err => {
        //ekrana uyarı vereceğim ( email or password wrong!)
      })
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: 'https://www.bootdey.com/image/280x280/9370DB/9370DB' }} style={styles.backgroundImage}>
        <View style={styles.logoContainer}>
          <Image source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar3.png' }} style={styles.logo} />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.card}>
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.card}>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 160,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  formContainer: {
    marginHorizontal: 20,
    marginTop: 50,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    padding: 10,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#B0C4DE'
  },
  loginButton: {
    backgroundColor: '#7B68EE',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LoginScreen;
