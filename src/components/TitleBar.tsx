import React, { useState } from 'react';

import { SafeAreaView, Text, TouchableWithoutFeedback, View } from 'react-native';
import Menu from './buttons/Menu';
import { ColorTheme } from '../../assets/colorCodes';
import LoginCheckModal from './LoginCheckModal';
import { useSelector } from 'react-redux';
import { carmeleonState } from '../redux/store';
import { DefaultScreenNavigationProp } from '../interfaces/navigation';
import { useNavigation } from '@react-navigation/native';

const TitleBar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const isAuthenticated = useSelector((state: carmeleonState) => state.isAuthenticated);
  const navigation: DefaultScreenNavigationProp = useNavigation();
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
        <TouchableWithoutFeedback
          onPress={() => {
            isAuthenticated ? navigation.navigate('AutoPay') : setModalVisible(!modalVisible);
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
