import React from 'react';

import { Text, TouchableOpacity } from 'react-native';
import { LoginMethodInterface } from '../../interfaces/login';
import AsyncStorage from '@react-native-community/async-storage';
import { DefaultScreenNavigationProp } from '../../interfaces/navigation';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { carmeleonDispatch } from '../../redux/store';
import { isAuthenticated } from '../../redux/slice';

const LoginButton = ({ backgroundColor, fontColor, code, name }: LoginMethodInterface) => {
  const navigation: DefaultScreenNavigationProp = useNavigation();
  const dispatch = useDispatch<carmeleonDispatch>();
  return (
    <>
      <TouchableOpacity
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '80%',
          height: 48,
          marginBottom: 8,
          borderRadius: 8,
          backgroundColor: backgroundColor,
        }}
        onPress={() => {
          let isAuth = false;
          AsyncStorage.setItem('isAuthenticated', 'authKey')
            .then(() => {
              console.log(code);
              isAuth = true;
            })
            .catch(e => {
              console.log(e);
            })
            .finally(() => {
              dispatch(isAuthenticated(isAuth));
              if (isAuth) {
                navigation.navigate('Home');
              }
            });
        }}
      >
        <Text style={{ color: fontColor }}>
          <Text style={{ fontWeight: 'bold' }}>{name}</Text>로 계속하기
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default LoginButton;
