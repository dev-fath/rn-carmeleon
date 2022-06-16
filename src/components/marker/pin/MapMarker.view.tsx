import { MapMarkerViewPropsInterface } from './mapMarker.interface';
import { Marker } from 'react-native-nmap';
import React from 'react';

const MapMarkerVAComponent = (props: MapMarkerViewPropsInterface) => {
  return <Marker {...props} />;
};

export default MapMarkerVAComponent;
