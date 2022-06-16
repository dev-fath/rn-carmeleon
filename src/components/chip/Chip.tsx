import React from 'react';

import { ServiceItemInterface } from '../../interfaces/serviceItem';
import { useDispatch } from 'react-redux';
import { carmeleonDispatch } from '../../redux/store';
import { selectedService } from '../../redux/slice';
import ChipVAComponent from './ChipVAComponent';
import { ChipPropsInterface } from './chip.interface';

const Chip = (serviceChipProps: ServiceItemInterface) => {
  const dispatch = useDispatch<carmeleonDispatch>();
  const chipProps: ChipPropsInterface = {
    ...serviceChipProps,
    onPress: () => {
      dispatch(selectedService(chipProps.title));
    },
  };
  return <ChipVAComponent {...chipProps} />;
};
export default Chip;
