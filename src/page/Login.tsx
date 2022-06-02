import React from 'react';

import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import BackButton from '../components/BackButton';

const LoginPage = () => {
  return (
    <SafeAreaView>
      <BackButton />
      <View>
        <Text>첫 로그인 접속하시면</Text>
        <Text>100 포인트.</Text>
      </View>
      <View>
        <Text>간편하게 시작해볼까요 :)</Text>
        <TouchableOpacity>
          <Text>네이버로 계속하기</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>카카오로 계속하기</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Apple로 계속하기</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Google로 계속하기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
