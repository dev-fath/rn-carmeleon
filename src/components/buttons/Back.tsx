import React from 'react';

import { NavigationProp, useNavigation } from '@react-navigation/native';
import BackButtonVAComponent from './Back.view';
import { ButtonPressInterface } from './interface';

const goBack = (navigation: NavigationProp<any>) => {
  return navigation.canGoBack() ? navigation.goBack() : navigation.navigate('Home');
};

const Back = () => {
  const navigation = useNavigation();
  const backButtonProps: ButtonPressInterface = {
    onPress: () => {
      goBack(navigation);
    },
  };

  return <BackButtonVAComponent {...backButtonProps} />;
};

export default Back;
