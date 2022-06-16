import { Pressable, Text } from 'react-native';
import React from 'react';
import { LoginButtonPropsInterface } from './interface';

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

export default LoginButtonVAComponent;
