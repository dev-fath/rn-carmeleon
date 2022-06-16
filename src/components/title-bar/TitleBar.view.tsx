import { Pressable, SafeAreaView, Text, View } from 'react-native';
import { ColorTheme } from '../../../assets/colorCodes';
import Menu from '../buttons/Menu';
import LoginCheckModal from '../login-check-modal/LoginCheckModal';
import React from 'react';
import { TitleBarViewPropsInterface } from './title-bar.interface';

const TitleBarVAComponent = (props: TitleBarViewPropsInterface) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: ColorTheme.Main,
      }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 16,
          paddingBottom: 16,
        }}
      >
        <Menu />
        <Text style={{ color: ColorTheme.white }}>로고</Text>
        <Pressable onPress={props.onPress}>
          <Text style={{ color: ColorTheme.white }}>자동결제등록</Text>
        </Pressable>
        <Pressable>
          <Text style={{ color: ColorTheme.white }}>검색버튼</Text>
        </Pressable>
      </View>
      <LoginCheckModal setModalVisible={props.setModalVisible} modalVisible={props.modalVisible} />
    </SafeAreaView>
  );
};

export default TitleBarVAComponent;
