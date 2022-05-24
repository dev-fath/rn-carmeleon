import React from 'react';

import { SafeAreaView, Text, TouchableWithoutFeedback, View } from 'react-native';
import MenuButton from './MenuButton';
import { ColorTheme } from '../../assets/colorCodes';

const TitleBar = () => {
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
        <MenuButton />
        <Text style={{ color: ColorTheme.white }}>로고</Text>
        <TouchableWithoutFeedback>
          <Text style={{ color: ColorTheme.white }}>자동결제등록</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Text style={{ color: ColorTheme.white }}>검색버튼</Text>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default TitleBar;
