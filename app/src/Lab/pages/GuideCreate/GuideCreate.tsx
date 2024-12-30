import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styles from './GuideCreate.styles';
import {Formik, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {postHttp} from '../../../Http';
import {useAuth} from '../../../Auth';
import {useNavigation} from '@react-navigation/native';

const GuideCreate: React.FC = () => {
  const {tokenAuth} = useAuth();
  const navigation = useNavigation();
  const initialValues = {
    name: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
  });

  const onSubmit = async (values: {name: string}) => {
    try {
      const response = await postHttp(
        'analysis/create-guide',
        values,
        tokenAuth as string,
      );
      console.log(response.data);
      navigation.navigate('AnalytRecordList', {data: response.data});
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kılavuz Olustur</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <View style={styles.inputContainer}>
              <Text>Name</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
              <ErrorMessage
                name="name"
                component={Text}
                style={styles.errorText}
              />
            </View>
            <Button onPress={handleSubmit as any} title="Olustur" />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default GuideCreate;
