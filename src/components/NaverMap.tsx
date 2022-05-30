import React, { useState } from 'react';

import NaverMapView, { Align, Marker } from 'react-native-nmap/index';
import { useSelector } from 'react-redux';
import { carmeleonState } from '../redux/store';
import { FuelEnum, ServiceEnum } from '../redux/slice';
import {
  CarWashMarkerInterface,
  EvChargerMarkerInterface,
  GasStationMarkerInterface,
  ParkingSiteMarkerInterface,
} from '../interfaces/marker';
import { Dimensions } from 'react-native';

const NaverMap = () => {
  const [area, setArea] = useState({ minLat: 0, maxLat: 0, minLon: 0, maxLon: 0 });
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

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const centerPoint = { latitude: 37.378595, longitude: 127.112724 };
  return (
    <NaverMapView
      style={{ position: 'absolute', width: windowWidth, height: windowHeight, top: 0, zIndex: -1 }}
      showsMyLocationButton={true}
      center={{ ...centerPoint, zoom: 15 }}
      onCameraChange={e => {
        setArea({
          minLat: e.coveringRegion[0].latitude,
          maxLat: e.coveringRegion[2].latitude,
          minLon: e.coveringRegion[0].longitude,
          maxLon: e.coveringRegion[2].longitude,
        });
      }}
      onMapClick={e => console.warn('onMapClick', JSON.stringify(e))}
    >
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
            coordinate={{ latitude: marker['lat'], longitude: marker['lon'] }}
            caption={getMarkerCaption(marker)}
          />
        ))}
    </NaverMapView>
  );
};

export default NaverMap;
