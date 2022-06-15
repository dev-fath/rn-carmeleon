import React from 'react';

import { Pressable, Text } from 'react-native';
import { LoginMethodInterface } from '../../interfaces/login';
import AsyncStorage from '@react-native-community/async-storage';
import { DefaultScreenNavigationProp } from '../../interfaces/navigation';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { carmeleonDispatch } from '../../redux/store';
import { isAuthenticated } from '../../redux/slice';

interface LoginButtonPropsInterface extends LoginMethodInterface {
  onPress: () => void;
}

const LoginButton = (props: LoginMethodInterface) => {
  const navigation: DefaultScreenNavigationProp = useNavigation();
  const dispatch = useDispatch<carmeleonDispatch>();
  const loginButtonProps: LoginButtonPropsInterface = {
    ...props,
    onPress: () => {
      let isAuth = false;
      AsyncStorage.setItem('isAuthenticated', 'authKey')
        .then(() => {
          console.log(props.code);
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
    },
  };
  return <LoginButtonVAComponent {...loginButtonProps} />;
};

const LoginButtonVAComponent = (props: LoginButtonPropsInterface) => {
  return (
    <Pressable
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 48,
        marginBottom: 8,
        borderRadius: 8,
        backgroundColor: props.backgroundColor,
      }}
      onPress={props.onPress}
    >
      <Text style={{ color: props.fontColor }}>
        <Text style={{ fontWeight: 'bold' }}>{props.name}</Text>로 계속하기
      </Text>
    </Pressable>
  );
};
export default LoginButton;
