import React from 'react';

import { Pressable, Text, View } from 'react-native';
import { ServiceItemInterface } from '../interfaces/serviceItem';
import { ColorTheme } from '../../assets/colorCodes';
import { useDispatch } from 'react-redux';
import { carmeleonDispatch } from '../redux/store';
import { selectedService } from '../redux/slice';

interface ChipPropsInterface extends ServiceItemInterface {
  onPress: () => void;
}

const Chip = (serviceChipProps: ServiceItemInterface) => {
  const dispatch = useDispatch<carmeleonDispatch>();
  const chipProps: ChipPropsInterface = {
    ...serviceChipProps,
    onPress: () => {
      dispatch(selectedService(chipProps.title));
    },
  };
  return <ChipView {...chipProps} />;
};

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
export default Chip;
