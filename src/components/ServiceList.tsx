import React from 'react';

import { SafeAreaView, View } from 'react-native';
import Chip from './Chip';
import { ColorTheme } from '../../assets/colorCodes';
import { ServiceItemInterface } from '../interfaces/serviceItem';
import { ServiceEnum } from '../redux/slice';

const ServiceList = () => {
  const serviceList: ServiceItemInterface[] = [
    { iconName: 'P', name: '주차장', title: ServiceEnum.parkingSite, color: ColorTheme.Main },
    { iconName: 'P', name: '충전소', title: ServiceEnum.chargingSpot, color: ColorTheme.Charger },
    { iconName: 'P', name: '주유소', title: ServiceEnum.gasStation, color: ColorTheme.GasStation },
    { iconName: 'P', name: '세차장', title: ServiceEnum.carWashSpot, color: ColorTheme.CarWash },
  ];

  return (
    <SafeAreaView style={{ position: 'absolute', marginTop: 72, zIndex: 1 }}>
      <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 16 }}>
        {serviceList.map(service => (
          <Chip key={service.title} {...service} />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default ServiceList;
