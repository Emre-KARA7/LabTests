import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styles from './Signup.styles';
import {Formik, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {postHttp} from '../../../Http';
import {useAuth} from './../../context/AuthContext';
import {useNavigation} from '@react-navigation/native';

const Signup: React.FC = () => {
  const {loginAuth} = useAuth();
    const navigation = useNavigation();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = async (values: {email: string; password: string}) => {
    try {
      console.log(values);
      const response = await postHttp('user', values);
      if (response.data && response.data.access_token) {
        loginAuth(response.data.access_token);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alteady have an account? </Text>
     <Button title="Login" onPress={() => navigation.goBack()} />

      <Text style={styles.title}>Sign Up</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <View style={styles.inputContainer}>
              <Text>Email</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              <ErrorMessage
                name="email"
                component={Text}
                style={styles.errorText}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Password</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
              <ErrorMessage
                name="password"
                component={Text}
                style={styles.errorText}
              />
            </View>
            <Button onPress={handleSubmit as any} title="SIGN UP" />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Signup;
