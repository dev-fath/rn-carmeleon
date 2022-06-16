import React from 'react';
import { Align } from 'react-native-nmap';
import ClusteredMarkerVAComponent from './ClusteredMarker.view';
import { ClusteredMarkerPropsInterface, ClusteredMarkerViewPropsInterface } from './clusteredMarker.interface';

const ClusteredMarker = (props: ClusteredMarkerPropsInterface) => {
  const clusteredMarkerProps: ClusteredMarkerViewPropsInterface = {
    area: props.area,
    onClick: () => {
      props.setZoomLevel(props.zoomLevel + 1);
      props.setCenterPoint({
        latitude: (props.area.minLat + props.area.maxLat) / 2,
        longitude: (props.area.minLon + props.area.maxLon) / 2,
      });
    },
    coordinate: {
      latitude: (props.area.minLat + props.area.maxLat) / 2,
      longitude: (props.area.minLon + props.area.maxLon) / 2,
    },
    caption: { text: `${props.serviceMarkerList.length}`, align: Align.Center },
    serviceMarkerList: props.serviceMarkerList,
  };
  return <ClusteredMarkerVAComponent {...clusteredMarkerProps} />;
};
export default ClusteredMarker;
