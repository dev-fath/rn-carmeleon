import React from 'react';

import { Pressable, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { carmeleonDispatch } from '../../redux/store';
import AsyncStorage from '@react-native-community/async-storage';
import { isAuthenticated } from '../../redux/slice';
import { useNavigation } from '@react-navigation/native';
import { DefaultScreenNavigationProp } from '../../interfaces/navigation';

const LogoutButton = () => {
  const dispatch = useDispatch<carmeleonDispatch>();
  const navigation: DefaultScreenNavigationProp = useNavigation();
  return (
    <Pressable
      onPress={() => {
        AsyncStorage.removeItem('isAuthenticated')
          .then(() => {
            dispatch(isAuthenticated(false));
            navigation.popToTop();
          })
          .catch(e => {
            console.log(e);
          });
      }}
    >
      <Text>로그아웃</Text>
    </Pressable>
  );
};

export default LogoutButton;
