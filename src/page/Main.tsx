import React from 'react';

import { Text, SafeAreaView, View, TouchableWithoutFeedback } from 'react-native';
import MenuButton from '../components/MenuButton';

const MainComponent = () => {
  return (
    <SafeAreaView>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <MenuButton />
        <Text>로고</Text>
        <TouchableWithoutFeedback>
          <Text>자동결제등록</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Text>검색버튼</Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Text>지도</Text>
      </View>
    </SafeAreaView>
  );
};

export default MainComponent;
