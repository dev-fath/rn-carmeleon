import React from 'react';

import { Align, Marker } from 'react-native-nmap';
import { useSelector } from 'react-redux';
import { carmeleonState } from '../redux/store';
import { FuelEnum, ServiceEnum } from '../redux/slice';
import {
  AreaInterface,
  CarWashMarkerInterface,
  EvChargerMarkerInterface,
  GasStationMarkerInterface,
  ParkingSiteMarkerInterface,
} from '../interfaces/marker';
import { ColorTheme } from '../../assets/colorCodes';

const MapMarker = ({ area }: { area: AreaInterface }) => {
  const selectedService = useSelector((state: carmeleonState) => state.selectedService);
  const parkingSiteList = useSelector((state: carmeleonState) => state.parkingSites);
  const chargingSpotList = useSelector((state: carmeleonState) => state.chargingSpots);
  const carWashSpotList = useSelector((state: carmeleonState) => state.carWashSpots);
  const gasStationList = useSelector((state: carmeleonState) => state.gasStations);
  const selectedFuel = useSelector((state: carmeleonState) => state.selectedFuel);

  const getServiceMarkerList = (
    selectedService: ServiceEnum,
  ): (ParkingSiteMarkerInterface | EvChargerMarkerInterface | GasStationMarkerInterface | CarWashMarkerInterface)[] => {
    switch (selectedService) {
      case ServiceEnum.carWashSpot:
        return carWashSpotList;
      case ServiceEnum.chargingSpot:
        return chargingSpotList;
      case ServiceEnum.gasStation:
        return gasStationList;
      case ServiceEnum.parkingSite:
        return parkingSiteList;
    }
  };

  const getMarkerColor = (selectedService: ServiceEnum) => {
    switch (selectedService) {
      case ServiceEnum.carWashSpot:
        return ColorTheme.CarWash;
      case ServiceEnum.chargingSpot:
        return ColorTheme.Charger;
      case ServiceEnum.gasStation:
        return ColorTheme.GasStation;
      case ServiceEnum.parkingSite:
        return ColorTheme.Main;
    }
  };

  const getMarkerCaption = (
    marker: ParkingSiteMarkerInterface | EvChargerMarkerInterface | GasStationMarkerInterface | CarWashMarkerInterface,
  ): {
    text?: string;
    align?: Align;
    textSize?: number;
    color?: string;
    haloColor?: string;
    offset?: number;
    requestedWidth?: number;
    minZoom?: number;
    maxZoom?: number;
  } => {
    const markerCaptionText = (
      marker:
        | ParkingSiteMarkerInterface
        | EvChargerMarkerInterface
        | GasStationMarkerInterface
        | CarWashMarkerInterface,
    ) => {
      if (marker.targetType === 0) {
        // 주차장
        return 'price' in marker && marker?.price ? `${marker.price / 1000}천원` : '';
      }
      if (marker.targetType === 1) {
        // 충전소
        return 'evChargers' in marker
          ? `충전가능 ${marker.evChargers?.filter(charger => charger.stat === 2).length || 0}`
          : '';
      }
      if (marker.targetType === 2) {
        // 주유소
        switch (selectedFuel) {
          case FuelEnum.diesel:
            return (selectedFuel in marker ? marker[selectedFuel] : 0)?.toString();
          case FuelEnum.premiumGasoline:
            return (selectedFuel in marker ? marker[selectedFuel] : 0)?.toString();
          case FuelEnum.gasoline:
            return (selectedFuel in marker ? marker[selectedFuel] : 0)?.toString();
          case FuelEnum.lpg:
            return (selectedFuel in marker ? marker[selectedFuel] : 0)?.toString();
        }
      }
      if (marker.targetType === 3) {
        // 세차장
        return 'carWashType' in marker ? marker.carWashType : '';
      }
    };

    return {
      text: markerCaptionText(marker),
      align: Align.Center,
      textSize: 12,
      maxZoom: 24,
      minZoom: 0,
      color: '#000',
    };
  };
  return (
    <>
      {getServiceMarkerList(selectedService)
        .filter(marker => {
          return (
            marker['lat'] > area.minLat &&
            marker['lat'] < area.maxLat &&
            marker['lon'] > area.minLon &&
            marker['lon'] < area.maxLon
          );
        })
        .map((marker, i: number) => (
          <Marker
            key={i}
            pinColor={getMarkerColor(selectedService)}
            coordinate={{ latitude: marker['lat'], longitude: marker['lon'] }}
            caption={getMarkerCaption(marker)}
          />
        ))}
    </>
  );
};

export default MapMarker;
