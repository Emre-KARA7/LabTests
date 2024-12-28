import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './AnalytList.styles';
import { getHttp } from '../../../Http';

const AnalytList: React.FC = () => {

  useEffect(() => {
    getAnalytList();
  }, []);

  const getAnalytList = async () => {
    try {
      const response = await getHttp('analysis/get-all-analyts');
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Analit</Text>
    </View>
  );
};

export default AnalytList;
