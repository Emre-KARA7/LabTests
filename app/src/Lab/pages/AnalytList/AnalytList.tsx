import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './AnalytList.styles';
import {getHttp} from '../../../Http';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

const AnalytList: React.FC = () => {
  const navigation = useNavigation();
  const [analytList, setAnalytList] = useState(
    [] as {id: number; name: string}[],
  );
  useEffect(() => {
    getAnalytList();
  }, []);

  useFocusEffect(
    useCallback(() => {
      getAnalytList();
    }, []),
  );

  const getAnalytList = async () => {
    try {
      const response = await getHttp('analysis/get-all-analyts');
      setAnalytList(response.data as {id: number; name: string}[]);
    } catch (e) {
      console.log(e);
    }
  };

  const renderItem = ({item}: {item: {id: number; name: string}}) => (
    <View style={styles.analyt} key={item.id}>
      <Text style={styles.analytName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Analit</Text>
      {analytList.length === 0 ? (
        <Text style={styles.analyt}>Analit yaratılmamışdır</Text>
      ) : (
        <FlatList
          data={analytList}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AnalytCreate' as never)}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AnalytList;