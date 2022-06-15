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

const LogoutButtonVAComponent = (props: LogoutButtonPropsInterface) => {
  return (
    <Pressable onPress={props.onPress}>
      <Text>로그아웃</Text>
    </Pressable>
  );
};

interface LogoutButtonPropsInterface {
  onPress: () => void;
}

export default LogoutButton;
