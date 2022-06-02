import React from 'react';

import { Text, TouchableOpacity } from 'react-native';
import { LoginMethodInterface } from '../../interfaces/login';

const LoginButton = ({ backgroundColor, fontColor, code, name }: LoginMethodInterface) => {
  return (
    <>
      <TouchableOpacity
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '80%',
          height: 48,
          marginBottom: 8,
          borderRadius: 8,
          backgroundColor: backgroundColor,
        }}
        onPress={() => console.log(code)}
      >
        <Text style={{ color: fontColor }}>
          <Text style={{ fontWeight: 'bold' }}>{name}</Text>로 계속하기
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default LoginButton;
