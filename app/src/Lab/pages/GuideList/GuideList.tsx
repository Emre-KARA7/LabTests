import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './GuideList.styles';
import {getHttp} from '../../../Http';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

const GuideList: React.FC = () => {
  const navigation = useNavigation();
  const [guideList, setGuideList] = useState(
    [] as {id: number; name: string}[],
  );
  useEffect(() => {
    getGuideList();
  }, []);

  useFocusEffect(
    useCallback(() => {
      getGuideList();
    }, []),
  );

  const getGuideList = async () => {
    try {
      const response = await getHttp('analysis/get-all-guides');
      setGuideList(response.data as {id: number; name: string}[]);
    } catch (e) {
      console.log(e);
    }
  };

  const renderItem = ({item}: {item: {id: number; name: string}}) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('AnalytRecordList', {guide: item});
      }}
      style={styles.analyt}
      key={item.id}>
      <Text style={styles.analytName}>{item.name}</Text>
    </TouchableOpacity>
  );
  console.log(guideList);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guide</Text>
      {guideList.length === 0 ? (
        <Text style={styles.GuideList}>Guide yaratılmamışdır</Text>
      ) : (
        <FlatList
          data={guideList}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('GuideCreate' as never)}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GuideList;
