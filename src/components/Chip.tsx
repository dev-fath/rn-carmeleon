import React from 'react';

import { Text, View } from 'react-native';

const Chip = ({ iconName, chipName }: { iconName: string; chipName: string }) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        margin: 4,
        padding: 8,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 4,
      }}
    >
      <Text>{iconName}</Text>
      <Text>{chipName}</Text>
    </View>
  );
};

export default Chip;
