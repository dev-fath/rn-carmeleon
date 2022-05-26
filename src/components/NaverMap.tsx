import React, { useEffect, useState } from 'react';

import NaverMapView, { Align, Marker } from 'react-native-nmap/index';
import axiosClient from '../api/interceptor';
import { useDispatch, useSelector } from 'react-redux';
import { carmeleonDispatch, carmeleonState } from '../redux/store';
import { carWashSpots, chargingSpots, gasStations, parkingSites, ServiceEnum } from '../redux/slice';
import { MarkerPointInterface } from '../interfaces/marker';

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
const NaverMap = () => {
  const [area, setArea] = useState({ minLat: 0, maxLat: 0, minLon: 0, maxLon: 0 });
  const selectedService = useSelector((state: carmeleonState) => state.selectedService);
  const parkingSiteList = useSelector((state: carmeleonState) => state.parkingSites);
  const dispatch = useDispatch<carmeleonDispatch>();
  const targetUrl = targetUrlSetter(selectedService);

  useEffect(() => {
    axiosClient
      .get<MarkerPointInterface[]>(targetUrl)
      .then(markerPoints => {
        dispatch(dispatchTarget(selectedService)(markerPoints.data));
      })
      .catch(e => {
        console.warn(e);
      });
  }, []);
  const centerPoint = { latitude: 37.378595, longitude: 127.112724 };
  return (
    <NaverMapView
      style={{ width: '100%', height: '100%' }}
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
      {parkingSiteList
        .filter(
          p => p['lat'] > area.minLat && p['lat'] < area.maxLat && p['lon'] > area.minLon && p['lon'] < area.maxLon,
        )
        .map((p, i) => (
          <Marker
            key={i}
            coordinate={{ latitude: p['lat'], longitude: p['lon'] }}
            caption={{
              text: `${p['price'] / 1000}천원`,
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
