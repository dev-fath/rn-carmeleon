import React from 'react';

import { Text, TouchableWithoutFeedback } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => goBack(navigation)}>
      <Text>Back</Text>
    </TouchableWithoutFeedback>
  );
};

const goBack = (navigation: NavigationProp<any>) => {
  return navigation.canGoBack() ? navigation.goBack() : navigation.navigate('Home');
};

export default BackButton;
