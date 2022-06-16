import React, { useEffect } from 'react';

import { View } from 'react-native';
import TitleBar from '../components/TitleBar';
import ServiceList from '../components/ServiceList';
import NaverMap from '../components/navermap/NaverMap';
import { carWashSpots, chargingSpots, gasStations, isAuthenticated, parkingSites, ServiceEnum } from '../redux/slice';
import axiosClient from '../api/interceptor';
import { useDispatch } from 'react-redux';
import { carmeleonDispatch } from '../redux/store';
import { MarkerPointInterface } from '../interfaces/marker';
import AsyncStorage from '@react-native-community/async-storage';

const MainComponent = () => {
  const serviceKeys: ServiceEnum[] = [
    ServiceEnum.parkingSite,
    ServiceEnum.carWashSpot,
    ServiceEnum.gasStation,
    ServiceEnum.chargingSpot,
  ];
  const dispatch = useDispatch<carmeleonDispatch>();
  AsyncStorage.getItem('isAuthenticated')
    .then((key): void => {
      dispatch(isAuthenticated(!!key));
    })
    .catch(e => {
      console.log(e);
    });
  useEffect(() => {
    serviceKeys.forEach(service => {
      loadMarkers(service)
        .then(res => {
          dispatch(dispatchTarget(service)(res.data));
        })
        .catch(e => {
          console.log(e);
        });
    });
  }, []);
  return (
    <View>
      <TitleBar />
      <ServiceList />
      <NaverMap />
    </View>
  );
};

const loadMarkers = (target: ServiceEnum) => {
  return axiosClient.get<MarkerPointInterface[]>(targetUrlSetter(target));
};

const targetUrlSetter = (selectedService: ServiceEnum) => {
  switch (true) {
    case selectedService === ServiceEnum.parkingSite:
      return 'parkings';
    case selectedService === ServiceEnum.carWashSpot:
      return 'carWashes';
    case selectedService === ServiceEnum.chargingSpot:
      return 'evChargeStations';
    case selectedService === ServiceEnum.gasStation:
      return 'gasStations';
    default:
      return 'parkings';
  }
};

const dispatchTarget = (selectedService: ServiceEnum) => {
  switch (true) {
    case selectedService === ServiceEnum.parkingSite:
      return parkingSites;
    case selectedService === ServiceEnum.carWashSpot:
      return carWashSpots;
    case selectedService === ServiceEnum.chargingSpot:
      return chargingSpots;
    case selectedService === ServiceEnum.gasStation:
      return gasStations;
    default:
      return parkingSites;
  }
};
export default MainComponent;
