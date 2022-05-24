import React from 'react';

import { Text, View } from 'react-native';
import TitleBar from '../components/TitleBar';
import ServiceList from '../components/ServiceList';

const MainComponent = () => {
  return (
    <View>
      <TitleBar />
      <ServiceList />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>지도</Text>
      </View>
    </View>
  );
};

export default MainComponent;
