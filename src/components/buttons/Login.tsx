import React from 'react';

import { LoginMethodInterface } from '../../interfaces/login';
import AsyncStorage from '@react-native-community/async-storage';
import { DefaultScreenNavigationProp } from '../../interfaces/navigation';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { carmeleonDispatch } from '../../redux/store';
import { isAuthenticated } from '../../redux/slice';
import { LoginButtonPropsInterface } from './interface';
import LoginButtonVAComponent from './Login.view';

const Login = (props: LoginMethodInterface) => {
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

export default Login;
