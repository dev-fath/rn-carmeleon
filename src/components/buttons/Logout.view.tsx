import React from 'react';

import { ButtonPressInterface } from './interface';
import { Pressable, Text } from 'react-native';

const LogoutButtonVAComponent = (props: ButtonPressInterface) => {
  return (
    <Pressable onPress={props.onPress}>
      <Text>로그아웃</Text>
    </Pressable>
  );
};

export default LogoutButtonVAComponent;
