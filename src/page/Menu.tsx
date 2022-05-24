import React from 'react';

import { Text, View } from 'react-native';
import BackButton from '../components/BackButton';

const MenuComponent = ({ userId }: { userId: string }) => {
  return (
    <View>
      <BackButton />
      <Text>{userId}</Text>
    </View>
  );
};

export default MenuComponent;
