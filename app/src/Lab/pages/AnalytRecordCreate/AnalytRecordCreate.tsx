import React from 'react';
import {View, Text, TextInput, Button, ScrollView} from 'react-native';
import styles from './AnalytRecordCreate.styles';
import {Formik, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {postHttp} from '../../../Http';
import {useAuth} from '../../../Auth';
import {useNavigation, useRoute} from '@react-navigation/native';

const AnalytRecordCreate: React.FC = () => {
  const route = useRoute();
  const {guide, analyt} = route.params as {
    guide: {id: number; name: string};
    analyt: {id: number; name: string};
  };
  console.log('guide, analyt', guide, analyt);
  const {tokenAuth} = useAuth();
  const navigation = useNavigation();
  const initialValues = {
    dayMin: 0,
    dayMax: 0,
    arithmeticMin: 0,
    arithmeticMax: 0,
    geometricMin: 0,
    geometricMax: 0,
    min: 0,
    max: 0,
  };

  const validationSchema = Yup.object({
    dayMin: Yup.number().required('Required'),
    dayMax: Yup.number()
      .required('Required')
      .moreThan(Yup.ref('dayMin'), 'dayMax must be greater than dayMin'),
    arithmeticMin: Yup.number().required('Required'),
    arithmeticMax: Yup.number()
      .required('Required')
      .moreThan(
        Yup.ref('arithmeticMin'),
        'arithmeticMax must be greater than arithmeticMin',
      ),
    geometricMin: Yup.number().required('Required'),
    geometricMax: Yup.number()
      .required('Required')
      .moreThan(
        Yup.ref('geometricMin'),
        'geometricMax must be greater than geometricMin',
      ),
    min: Yup.number().required('Required'),
    max: Yup.number()
      .required('Required')
      .moreThan(Yup.ref('min'), 'max must be greater than min'),
  });

  const onSubmit = async (values: {name: string}) => {
    try {
      const bodyValues = {
        ...values,
        guideId: guide.id,
        analytId: analyt.id,
      };

      const response = await postHttp(
        'analysis/create-analyt-record',
        bodyValues,
        tokenAuth as string,
      );
      console.log(response.data);
      navigation.pop(2);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kayıt: {guide.name + ' - ' + analyt.name}</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <ScrollView style={styles.formScroll}>
            <View style={styles.inputContainer}>
              <Text>Day Min</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('dayMin')}
                onBlur={handleBlur('dayMin')}
                value={String(values.dayMin)}
                keyboardType="numeric"
              />
              <ErrorMessage
                name="dayMin"
                component={Text}
                style={styles.errorText}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Day Max</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('dayMax')}
                onBlur={handleBlur('dayMax')}
                value={String(values.dayMax)}
                keyboardType="numeric"
              />
              <ErrorMessage
                name="dayMax"
                component={Text}
                style={styles.errorText}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Arithmetic Min</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('arithmeticMin')}
                onBlur={handleBlur('arithmeticMin')}
                value={String(values.arithmeticMin)}
                keyboardType="numeric"
              />
              <ErrorMessage
                name="arithmeticMin"
                component={Text}
                style={styles.errorText}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Arithmetic Max</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('arithmeticMax')}
                onBlur={handleBlur('arithmeticMax')}
                value={String(values.arithmeticMax)}
                keyboardType="numeric"
              />
              <ErrorMessage
                name="arithmeticMax"
                component={Text}
                style={styles.errorText}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Geometric Min</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('geometricMin')}
                onBlur={handleBlur('geometricMin')}
                value={String(values.geometricMin)}
                keyboardType="numeric"
              />
              <ErrorMessage
                name="geometricMin"
                component={Text}
                style={styles.errorText}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Geometric Max</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('geometricMax')}
                onBlur={handleBlur('geometricMax')}
                value={String(values.geometricMax)}
                keyboardType="numeric"
              />
              <ErrorMessage
                name="geometricMax"
                component={Text}
                style={styles.errorText}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Min</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('min')}
                onBlur={handleBlur('min')}
                value={String(values.min)}
                keyboardType="numeric"
              />
              <ErrorMessage
                name="min"
                component={Text}
                style={styles.errorText}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Max</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('max')}
                onBlur={handleBlur('max')}
                value={String(values.max)}
                keyboardType="numeric"
              />
              <ErrorMessage
                name="max"
                component={Text}
                style={styles.errorText}
              />
            </View>
            <Button onPress={handleSubmit as any} title="Olustur" />
          </ScrollView>
        )}
      </Formik>
    </View>
  );
};

export default AnalytRecordCreate;
