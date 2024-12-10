import React, {useEffect} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styles from './Profile.styles';
import {getHttp} from '../../../Http';
import {useAuth} from './../../context/AuthContext';

const Profile: React.FC = () => {
  const {tokenAuth} = useAuth();

    useEffect(() => {
       // getHttp('/profile', tokenAuth).then((res) => {
      //  console.log(res);
      //  });
    }, [tokenAuth]);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

    </View>
  );
};

export default Profile;
