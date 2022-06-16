import NaverMapView from 'react-native-nmap';
import { AreaInterface } from '../../interfaces/marker';
import MapMarker from '../marker/pin/MapMarker';
import React from 'react';
import { NaverMapMarkerPropsInterface, NaverMapPropsInterface } from './navermap.interface';

const NaverMapVAComponent = (props: NaverMapPropsInterface) => {
  return (
    <NaverMapView
      style={{ position: 'absolute', width: props.windowWidth, height: props.windowHeight, top: 0, zIndex: -1 }}
      showsMyLocationButton={true}
      center={props.centerPoint}
      minZoomLevel={10}
      onCameraChange={props.onCameraChange}
      // onMapClick={e => console.warn('onMapClick', JSON.stringify(e))}
    >
      <AreaMarker markerAreas={props.markerAreas} mapMarkerProps={props.mapMarkerProps} />
    </NaverMapView>
  );
};

const AreaMarker = (props: { markerAreas: AreaInterface[]; mapMarkerProps: NaverMapMarkerPropsInterface }) => {
  {
    return (
      <>
        {props.markerAreas.map((smallArea, i) => {
          return <MapMarker key={i} area={smallArea} {...props.mapMarkerProps} />;
        })}
      </>
    );
  }
};

export default NaverMapVAComponent;
