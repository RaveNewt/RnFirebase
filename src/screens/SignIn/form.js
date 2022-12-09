import {View} from 'react-native';
import React from 'react';
import TextField from '../../components/TextField';
import {ActivityIndicator, Button} from 'react-native-paper';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import validationSchema from '../SignIn/validationSchema';
import Divider from '../../components/Divider';

const Form = ({buttonLabel, initialValues, onSubmit, isLoading}) => {
  const form = useForm({
    mode: 'all',
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });
  const {control, handleSubmit} = form;

  return (
    <View>
      <TextField
        name="email"
        label="Email"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        control={control}
      />
      <Divider height={16} />
      <TextField
        name="password"
        label="Password"
        secureTextEntry
        control={control}
      />
      <Divider height={48} />
      {isLoading ? (
        <ActivityIndicator animating />
      ) : (
        <Button mode="contained-tonal" onPress={handleSubmit(onSubmit)}>
          {buttonLabel}
        </Button>
      )}
    </View>
  );
};

export default Form;
