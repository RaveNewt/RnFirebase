import {Alert, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {ActivityIndicator, Appbar, Button, useTheme} from 'react-native-paper';
import Divider from '../../components/Divider';
import Form from './form';

const LoginScreen = ({navigation}) => {
  const initialValues = {
    email: '',
    password: '',
  };

  const theme = useTheme();

  const [isLoading, setLoading] = useState(false);

  const onSignIn = values => {
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        navigation.replace('HomeScreen');
      })
      .catch(error => {
        let message = 'Unknown Error';
        if (error.code === 'auth/email-already-in-use') {
          message = 'That email address is already in use!';
        }

        if (error.code === 'auth/invalid-email') {
          message = 'That email address is invalid!';
        }

        Alert.alert(message);
        console.error(error);
      })
      .finally(() => setLoading(false));
  };
  return (
    <View style={{flex: 1}}>
      <Appbar.Header style={{backgroundColor: theme.colors.primaryContainer}}>
        <Appbar.Content title="Sign In" />
      </Appbar.Header>
      <View style={{paddingHorizontal: 24, paddingTop: 32}}>
        <Form
          buttonLabel="Sign In"
          initialValues={initialValues}
          onSubmit={onSignIn}
          isLoading={isLoading}
        />
        <Divider height={16} />
        <Button mode="text" onPress={() => navigation.navigate('SignUpScreen')}>
          Sign Up
        </Button>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
