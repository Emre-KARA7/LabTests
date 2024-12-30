import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './AnalytList.styles';
import {getHttp} from '../../../Http';
import {
  useNavigation,
  useFocusEffect,
  useRoute,
} from '@react-navigation/native';

const AnalytList: React.FC = () => {
  const route = useRoute();
  const {guide} = route.params as {guide: {id: number; name: string}};
  const navigation = useNavigation();
  const [selectedAnalyt, setSelectedAnalyt] = useState(
    {} as {id: number; name: string},
  );
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
    <TouchableOpacity
      onPress={() => {
        setSelectedAnalyt(item);
      }}
      style={styles.analyt}
      key={item.id}>
      <Text style={styles.analytName}>
        {item.id === selectedAnalyt.id ? '✔️ ' : null}
        {item.name}
      </Text>
    </TouchableOpacity>
  );
  console.log('selectedAnalyt', selectedAnalyt);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Analit Sec</Text>
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
      {selectedAnalyt.id ? (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() =>
            navigation.navigate('AnalytRecordCreate', {
              guide,
              analyt: selectedAnalyt,
            })
          }>
          <Text style={styles.addButtonText}>➡</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default AnalytList;
