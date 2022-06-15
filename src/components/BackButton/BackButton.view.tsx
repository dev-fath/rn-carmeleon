import { Text, TouchableWithoutFeedback } from 'react-native';
import React from 'react';

const BackButtonVAComponent = (props: BackButtonPropsInterface) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Text>Back</Text>
    </TouchableWithoutFeedback>
  );
};

export interface BackButtonPropsInterface {
  onPress: () => void;
}

export default BackButtonVAComponent;
