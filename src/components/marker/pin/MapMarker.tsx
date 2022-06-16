import React from 'react';

import { useSelector } from 'react-redux';
import { carmeleonState } from '../../../redux/store';
import { ServiceEnum } from '../../../redux/slice';
import { MarkerTypesUnion } from '../../../interfaces/marker';
import ClusteredMarker from '../clustered/ClusteredMarker';
import { MapMarkerPropsInterface, MapMarkerViewPropsInterface } from './mapMarker.interface';
import MapMarkerVAComponent from './MapMarker.view';
import { getMarkerCaption } from '../utils/markerCaption';
import { ClusteredMarkerPropsInterface } from '../clustered/clusteredMarker.interface';
import { getMarkerColor } from '../utils/markerColor';

const MapMarker = (props: MapMarkerPropsInterface) => {
  const selectedService = useSelector((state: carmeleonState) => state.selectedService);
  const parkingSiteList = useSelector((state: carmeleonState) => state.parkingSites);
  const chargingSpotList = useSelector((state: carmeleonState) => state.chargingSpots);
  const carWashSpotList = useSelector((state: carmeleonState) => state.carWashSpots);
  const gasStationList = useSelector((state: carmeleonState) => state.gasStations);
  const selectedFuel = useSelector((state: carmeleonState) => state.selectedFuel);

  const getServiceMarkerList = (selectedService: ServiceEnum): MarkerTypesUnion[] => {
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

  const serviceMarkerList = getServiceMarkerList(selectedService).filter(marker => {
    return (
      marker['lat'] > props.area.minLat &&
      marker['lat'] < props.area.maxLat &&
      marker['lon'] > props.area.minLon &&
      marker['lon'] < props.area.maxLon
    );
  });

  const mapMarkerProps: MapMarkerViewPropsInterface = {
    area: props.area,
    zoomLevel: props.zoomLevel,
    selectedFuel,
    serviceMarkerList,
    selectedService,
    pinColor: getMarkerColor(selectedService),
    caption: {},
    coordinate: { latitude: 0, longitude: 0 },
  };

  const clusteredMarkerProps: ClusteredMarkerPropsInterface = {
    setZoomLevel: props.setZoomLevel,
    setCenterPoint: props.setCenterPoint,
    area: props.area,
    zoomLevel: props.zoomLevel,
    serviceMarkerList,
  };

  return props.zoomLevel < 15 ? (
    <ClusteredMarker {...clusteredMarkerProps} />
  ) : (
    <>
      {serviceMarkerList.map((marker, i: number) => {
        return (
          <MapMarkerVAComponent
            key={i}
            {...mapMarkerProps}
            caption={getMarkerCaption(marker, selectedFuel)}
            coordinate={{ latitude: marker['lat'], longitude: marker['lon'] }}
          />
        );
      })}
    </>
  );
};
export default MapMarker;
