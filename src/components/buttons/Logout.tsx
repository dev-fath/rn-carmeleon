import React from 'react';

import { useDispatch } from 'react-redux';
import { carmeleonDispatch } from '../../redux/store';
import AsyncStorage from '@react-native-community/async-storage';
import { isAuthenticated } from '../../redux/slice';
import { useNavigation } from '@react-navigation/native';
import { DefaultScreenNavigationProp } from '../../interfaces/navigation';
import LogoutButtonVAComponent from './Logout.view';

const Logout = () => {
  const dispatch = useDispatch<carmeleonDispatch>();
  const navigation: DefaultScreenNavigationProp = useNavigation();

  const logoutButtonProps = {
    onPress: () => {
      AsyncStorage.removeItem('isAuthenticated')
        .then(() => {
          dispatch(isAuthenticated(false));
          navigation.popToTop();
        })
        .catch(e => {
          console.log(e);
        });
    },
  };
  return <LogoutButtonVAComponent {...logoutButtonProps} />;
};

export default Logout;
