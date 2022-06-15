import React, { Dispatch, SetStateAction, useState } from 'react';

import NaverMapView from 'react-native-nmap/index';
import { Dimensions } from 'react-native';
import MapMarker from './MapMarker';
import { AreaInterface } from '../interfaces/marker';
import { Coord } from 'react-native-nmap';
import { setMarkerArea } from '../util/navermap/getMarkerArea';

interface NaverMapPropsInterface {
  windowHeight: number;
  windowWidth: number;
  centerPoint: Coord & { zoom?: number; tilt?: number; bearing?: number };
  zoomLevel: number;
  area: AreaInterface;
  onCameraChange: (event: {
    latitude: number;
    longitude: number;
    zoom: number;
    contentsRegion: [Coord, Coord, Coord, Coord, Coord];
    coveringRegion: [Coord, Coord, Coord, Coord, Coord];
  }) => void;
  mapMarkerProps: MapMarkerPropsInterface;
  markerAreas: AreaInterface[];
}

interface MapMarkerPropsInterface {
  zoomLevel: number;
  setZoomLevel: Dispatch<SetStateAction<number>>;
  setCenterPoint: Dispatch<SetStateAction<Coord>>;
}

const NaverMap = () => {
  const [area, setArea] = useState<AreaInterface>({ minLat: 0, maxLat: 0, minLon: 0, maxLon: 0 });
  const [centerPoint, setCenterPoint] = useState<Coord>({ latitude: 37.378595, longitude: 127.112724 });
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [zoomLevel, setZoomLevel] = useState(15);

  const naverMapProps: NaverMapPropsInterface = {
    windowHeight,
    windowWidth,
    centerPoint: { ...centerPoint, zoom: zoomLevel },
    zoomLevel,
    area,
    onCameraChange: e => {
      setArea({
        minLat: e.coveringRegion[0].latitude,
        maxLat: e.coveringRegion[2].latitude,
        minLon: e.coveringRegion[0].longitude,
        maxLon: e.coveringRegion[2].longitude,
      });
      setZoomLevel(e.zoom);
    },
    mapMarkerProps: {
      zoomLevel: zoomLevel,
      setZoomLevel: setZoomLevel,
      setCenterPoint: setCenterPoint,
    },
    markerAreas: setMarkerArea(zoomLevel, area),
  };

  return <NaverMapVAComponent {...naverMapProps} />;
};

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

const AreaMarker = (props: { markerAreas: AreaInterface[]; mapMarkerProps: MapMarkerPropsInterface }) => {
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

export default NaverMap;
