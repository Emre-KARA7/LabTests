import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './UserList.styles';
import {getHttp} from '../../../Http';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

const UserList: React.FC = () => {
  const navigation = useNavigation();
  const [userList, setUserList] = useState(
    [] as {id: number; name: string}[],
  );
  useEffect(() => {
    getUserList();
  }, []);

  useFocusEffect(
    useCallback(() => {
      getUserList();
    }, []),
  );

  const getUserList = async () => {
    try {
      const response = await getHttp('analysis/get-all-guides');
      setUserList(response.data as {id: number; name: string}[]);
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
  console.log(userList);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>
      {userList.length === 0 ? (
        <Text style={styles.UserList}>User yaratılmamışdır</Text>
      ) : (
        <FlatList
          data={userList}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default UserList;
