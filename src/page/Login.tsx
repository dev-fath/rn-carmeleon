import React from 'react';

import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../components/BackButton';

const LoginPage = () => {
  return (
    <SafeAreaView>
      <LinearGradient
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'space-between',
        }}
        colors={['#34AFEF', '#557FD7', '#557FD7']}
        start={{ x: 3.25, y: 0.75 }}
        end={{ x: 1, y: 2.25 }}
      >
        <BackButton />
        <View>
          <Text>첫 로그인 접속하시면</Text>
          <Text>100 포인트.</Text>
        </View>
        <View>
          <Text style={{ textAlign: 'center' }}>간편하게 시작해볼까요 :)</Text>
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <Text>네이버로 계속하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <Text>카카오로 계속하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <Text>Apple로 계속하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <Text>Google로 계속하기</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>로고</Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default LoginPage;
