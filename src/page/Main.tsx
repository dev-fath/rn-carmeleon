import React from 'react';

import { View } from 'react-native';
import TitleBar from '../components/TitleBar';
import ServiceList from '../components/ServiceList';
import NaverMap from '../components/NaverMap';

const MainComponent = () => {
  return (
    <View>
      <TitleBar />
      <ServiceList />
      <NaverMap />
    </View>
  );
};

export default MainComponent;
