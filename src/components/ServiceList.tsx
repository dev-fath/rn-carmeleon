import React from 'react';

import { View } from 'react-native';
import Chip from './Chip';
import { ColorTheme } from '../../assets/colorCodes';
import { ServiceItemInterface } from '../interfaces/serviceItem';

const ServiceList = () => {
  const serviceList: ServiceItemInterface[] = [
    { iconName: 'P', name: '주차장', color: ColorTheme.Main },
    { iconName: 'P', name: '충전소', color: ColorTheme.Charger },
    { iconName: 'P', name: '주유소', color: ColorTheme.GasStation },
    { iconName: 'P', name: '세차장', color: ColorTheme.CarWash },
  ];
  return (
    <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 16 }}>
      {serviceList.map(service => {
        return <Chip key={service.name} {...service} />;
      })}
    </View>
  );
};

export default ServiceList;
