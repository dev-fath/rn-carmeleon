import React from 'react';

import { NavigationProp, useNavigation } from '@react-navigation/native';
import BackButtonVAComponent, { BackButtonPropsInterface } from './BackButton.view';

const goBack = (navigation: NavigationProp<any>) => {
  return navigation.canGoBack() ? navigation.goBack() : navigation.navigate('Home');
};

const BackButton = () => {
  const navigation = useNavigation();
  const backButtonProps: BackButtonPropsInterface = {
    onPress: () => {
      goBack(navigation);
    },
  };

  return <BackButtonVAComponent {...backButtonProps} />;
};

export default BackButton;
