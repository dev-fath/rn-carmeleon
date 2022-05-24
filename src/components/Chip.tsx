import React from 'react';

import { Text, View } from 'react-native';
import { ServiceItemInterface } from '../interfaces/serviceItem';

const Chip = (chipProps: ServiceItemInterface) => {
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
        borderColor: chipProps.color,
      }}
    >
      <Text>{chipProps.iconName}</Text>
      <Text>{chipProps.name}</Text>
    </View>
  );
};

export default Chip;