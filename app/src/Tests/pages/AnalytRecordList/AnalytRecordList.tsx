import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './AnalytRecordList.styles';
import {getHttp} from '../../../Http';
import {
  useNavigation,
  useFocusEffect,
  useRoute,
} from '@react-navigation/native';

interface AnalytRecord {
  dayMax: number;
  dayMin: number;
  guide: {id: number; name: string};
  analyt: {id: number; name: string};
  arithmeticMax: number;
  arithmeticMin: number;
  geometricMax: number;
  geometricMin: number;
  id: number;
  max: number;
  min: number;
}

const AnalytRecordList: React.FC = () => {
  const route = useRoute();
  const {guide} = route.params as {guide: {id: number; name: string}};
  console.log('guide', guide);
  const navigation = useNavigation();
  const [analytRecordList, setAnalytRecordList] = useState(
    [] as AnalytRecord[],
  );
  useEffect(() => {
    getAnalytRecordList();
  }, []);

  useFocusEffect(
    useCallback(() => {
      getAnalytRecordList();
    }, []),
  );

  const getAnalytRecordList = async () => {
    try {
      const response = await getHttp(
        'analysis/search-analyt-records?guideId=' + guide.id,
      );
      setAnalytRecordList(response.data as AnalytRecord[]);
    } catch (e) {
      console.log(e);
    }
  };

  const renderItem = ({item}: {item: AnalytRecord}) => (
    <View style={styles.analyt} key={item.id}>
      <Text style={styles.analytName}>
        {item.analyt.name +
          ' | Day:  ' +
          item.dayMin +
          ' - ' +
          item.dayMax}
      </Text>
      <Text style={styles.analytRow}>
        Aritmethic Min-Max: {item.arithmeticMin + ' | ' + item.arithmeticMax}
      </Text>
      <Text style={styles.analytRow}>
        Geometric Min-Max: {item.geometricMin + ' | ' + item.geometricMax}
      </Text>
      <Text style={styles.analytRow}>
        Min-Max: {item.min + ' | ' + item.max}
      </Text>
    </View>
  );
  console.log(analytRecordList);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{guide.name + '\n'} Analyt Kayitlari</Text>
      {analytRecordList.length === 0 ? (
        <Text style={styles.AnalytRecordList}>
          Analyt kaydi yaratılmamışdır
        </Text>
      ) : (
        <FlatList
          data={analytRecordList}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AnalytList', {guide})}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AnalytRecordList;
