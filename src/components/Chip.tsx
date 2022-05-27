import React from 'react';

import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { ServiceItemInterface } from '../interfaces/serviceItem';
import { ColorTheme } from '../../assets/colorCodes';
import { useDispatch } from 'react-redux';
import { carmeleonDispatch } from '../redux/store';
import { selectedService } from '../redux/slice';

const Chip = (chipProps: ServiceItemInterface) => {
  const dispatch = useDispatch<carmeleonDispatch>();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        dispatch(selectedService(chipProps.title));
      }}
    >
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
    </TouchableWithoutFeedback>
  );
};
export default Chip;
