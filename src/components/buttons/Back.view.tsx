import { Pressable, Text } from 'react-native';
import React from 'react';
import { ButtonPressInterface } from './interface';

const BackButtonVAComponent = (props: ButtonPressInterface) => {
  return (
    <Pressable onPress={props.onPress}>
      <Text>Back</Text>
    </Pressable>
  );
};

export default BackButtonVAComponent;
