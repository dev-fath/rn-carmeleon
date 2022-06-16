import React from 'react';

import { ColorTheme } from '../../../assets/colorCodes';
import { ServiceItemInterface } from '../../interfaces/serviceItem';
import { ServiceEnum } from '../../redux/slice';
import ServiceListVAComponent from './ServiceList.view';

const ServiceList = () => {
  const serviceList: ServiceItemInterface[] = [
    { iconName: 'P', name: '주차장', title: ServiceEnum.parkingSite, color: ColorTheme.Main },
    { iconName: 'P', name: '충전소', title: ServiceEnum.chargingSpot, color: ColorTheme.Charger },
    { iconName: 'P', name: '주유소', title: ServiceEnum.gasStation, color: ColorTheme.GasStation },
    { iconName: 'P', name: '세차장', title: ServiceEnum.carWashSpot, color: ColorTheme.CarWash },
  ];

  const serviceListViewProps = {
    serviceList: serviceList,
  };

  return <ServiceListVAComponent {...serviceListViewProps} />;
};

export default ServiceList;
