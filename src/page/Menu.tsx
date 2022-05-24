import React from 'react';

import { Text, View } from 'react-native';

const MenuComponent = ({ userId }: { userId: string }) => {
  return (
    <View>
      <Text>{userId}</Text>
    </View>
  );
};

export default MenuComponent;
