import React from 'react';

import { ServiceItemInterface } from '../../interfaces/serviceItem';
import { useDispatch } from 'react-redux';
import { carmeleonDispatch } from '../../redux/store';
import { selectedService } from '../../redux/slice';
import ChipView from './Chip.view';
import { ChipPropsInterface } from './chip.interface';

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
export default Chip;
