import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './Profile.styles';
import {getHttp, postHttp} from '../../../Http';
import {useAuth} from './../../context/AuthContext';

const Profile: React.FC = () => {
  const {jwtObj, tokenAuth} = useAuth();
  const [user, setUser] = useState({});
  const [newUser, setNewUser] = useState({});
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const getUsr = async () => {
      const response = await getHttp('/users/' + jwtObj.id);
      if (response.data) {
        setUser(response.data);
        setNewUser(response.data);
      }
    };
    getUsr();
  }, []);

  const saveUser = async () => {
    try {
      // const token = await AsyncStorage.getItem('token');
      // let config = {headers
      // let config = {headers: {Authorization: `Bearer ${tokenAuth}`}};
      if (tokenAuth) {
        const body = {
          id: jwtObj.id,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
        };
        console.log('body ', body);
        const response = await postHttp('/users/' + jwtObj.id, body, tokenAuth);
        console.log(response.data);
        setUser(newUser);
        setEdit(!edit);
      }
    } catch (error) {
      console.log('ee', error.response.data);
    }
  };

  if (edit) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Edit Profile</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={newUser.firstName}
          onChangeText={text => setNewUser({...newUser, firstName: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={newUser.lastName}
          onChangeText={text => setNewUser({...newUser, lastName: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={newUser.email}
          onChangeText={text => setNewUser({...newUser, email: text})}
        />
        <TouchableOpacity
          onPress={() => {
            saveUser();
          }}>
          <Text style={styles.text}>💾 Save</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.text}>{user.email}</Text>
        <Text style={styles.text}>{user.role}</Text>
        <Text style={styles.text}>{user.firstName} </Text>
        <Text style={styles.text}>{user.lastName}</Text>
        <TouchableOpacity onPress={() => setEdit(!edit)}>
          <Text style={styles.text}>✏️ Edit</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default Profile;
