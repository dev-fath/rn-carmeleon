import React from 'react';

import { Text, View } from 'react-native';
import TitleBar from '../components/TitleBar';

const MainComponent = () => {
  return (
    <View>
      <TitleBar />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>지도</Text>
      </View>
    </View>
  );
};

export default MainComponent;
