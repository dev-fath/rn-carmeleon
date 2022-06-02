import React, { useState } from 'react';

import { SafeAreaView, Text, TouchableWithoutFeedback, View } from 'react-native';
import MenuButton from './MenuButton';
import { ColorTheme } from '../../assets/colorCodes';
import LoginCheckModal from './LoginCheckModal';

const TitleBar = () => {
  const [modalVisible, setModalVisible] = useState(false);
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
        <TouchableWithoutFeedback
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Text style={{ color: ColorTheme.white }}>자동결제등록</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Text style={{ color: ColorTheme.white }}>검색버튼</Text>
        </TouchableWithoutFeedback>
      </View>
      <LoginCheckModal setModalVisible={setModalVisible} modalVisible={modalVisible} />
    </SafeAreaView>
  );
};

export default TitleBar;
