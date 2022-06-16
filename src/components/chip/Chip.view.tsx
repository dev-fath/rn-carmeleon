import { Pressable, Text, View } from 'react-native';
import { ColorTheme } from '../../../assets/colorCodes';
import React from 'react';
import { ChipPropsInterface } from './chip.interface';

const ChipView = (chipProps: ChipPropsInterface) => {
  return (
    <Pressable onPress={chipProps.onPress}>
      <View
        style={{
          backgroundColor: ColorTheme.white,
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
    </Pressable>
  );
};

export default ChipView;
