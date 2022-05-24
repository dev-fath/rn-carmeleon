import React from 'react';

import { Text, View } from 'react-native';

const MenuItem = ({ icon, name }: { icon: string; name: string }) => {
  return (
    <View style={{ width: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
      <Text>{icon}</Text>
      <Text>{name}</Text>
    </View>
  );
};

export default MenuItem;
