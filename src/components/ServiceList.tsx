import React from 'react';

import { View } from 'react-native';
import Chip from './Chip';

const ServiceList = () => {
  const serviceList = [
    { iconName: 'P', name: '주차장' },
    { iconName: 'P', name: '충전소' },
    { iconName: 'P', name: '주유소' },
    { iconName: 'P', name: '세차장' },
  ];
  return (
    <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 16 }}>
      {serviceList.map(service => {
        return <Chip key={service.name} iconName={service.iconName} chipName={service.name} />;
      })}
    </View>
  );
};

export default ServiceList;
