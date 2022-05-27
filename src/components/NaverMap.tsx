import React, { useState } from 'react';

import NaverMapView, { Align, Marker } from 'react-native-nmap/index';
import { useSelector } from 'react-redux';
import { carmeleonState } from '../redux/store';
import { ServiceEnum } from '../redux/slice';
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

  function getServiceMarkerList(
    selectedService: ServiceEnum,
  ): (ParkingSiteMarkerInterface | EvChargerMarkerInterface | GasStationMarkerInterface | CarWashMarkerInterface)[] {
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
  }

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
        console.log('onCameraChange', e.coveringRegion);
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
            caption={{
              text: 'price' in marker && marker?.price ? `${marker.price / 1000}천원` : '',
              align: Align.Center,
              textSize: 12,
              maxZoom: 24,
              minZoom: 0,
              color: '#000',
            }}
          />
        ))}
    </NaverMapView>
  );
};

export default NaverMap;
