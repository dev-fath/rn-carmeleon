import { Marker } from 'react-native-nmap';
import React from 'react';
import { ClusteredMarkerViewPropsInterface } from './clusteredMarker.interface';

const ClusteredMarkerVAComponent = (props: ClusteredMarkerViewPropsInterface) => {
  return props.serviceMarkerList.length > 0 ? (
    <Marker coordinate={props.coordinate} caption={props.caption} onClick={props.onClick} />
  ) : (
    <></>
  );
};

export default ClusteredMarkerVAComponent;
