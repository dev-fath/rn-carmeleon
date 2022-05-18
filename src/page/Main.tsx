import React from 'react';

import { ScrollView, Text } from 'react-native';
import MenuButton from '../components/MenuButton';

const MainComponent = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <MenuButton />
      <Text>Main page</Text>
    </ScrollView>
  );
};

export default MainComponent;
