import React from 'react';

import { SafeAreaView, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../components/BackButton';
import { ColorTheme, OtherServiceColorTheme } from '../../assets/colorCodes';
import { LoginMethodInterface } from '../interfaces/login';
import Login from '../components/buttons/Login';

const LoginPage = () => {
  const loginMethod: LoginMethodInterface[] = [
    { code: 'kakao', name: '카카오', backgroundColor: OtherServiceColorTheme.KakaoYellow },
    { code: 'naver', name: '네이버', backgroundColor: OtherServiceColorTheme.NaverGreen },
    { code: 'apple', name: '애플', backgroundColor: OtherServiceColorTheme.AppleBlack, fontColor: ColorTheme.white },
    { code: 'google', name: '구글', backgroundColor: OtherServiceColorTheme.GoogleWhite },
  ];
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
        <View style={{ marginLeft: 32 }}>
          <Text style={{ color: ColorTheme.white, fontSize: 20 }}>첫 로그인 접속하시면</Text>
          <Text style={{ color: ColorTheme.white, fontSize: 20, fontWeight: 'bold' }}>100 포인트.</Text>
        </View>
        <View style={{ display: 'flex', alignItems: 'center' }}>
          <Text style={{ textAlign: 'center', color: ColorTheme.white, fontSize: 12, marginBottom: 16 }}>
            간편하게 시작해볼까요 :)
          </Text>
          {loginMethod.map(method => {
            return (
              <Login
                key={method.code}
                name={method.name}
                code={method.code}
                backgroundColor={method.backgroundColor}
                fontColor={method.fontColor}
              />
            );
          })}
          <Text style={{ fontSize: 10, color: ColorTheme.white }}>
            회원가입 시 서비스 이용약관과 개인정보 보호정책에 동의하게 됩니다
          </Text>
        </View>
        <View>
          <Text>로고</Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default LoginPage;
