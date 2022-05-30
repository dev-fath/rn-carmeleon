import React, { useState } from 'react';

import NaverMapView from 'react-native-nmap/index';
import { Dimensions } from 'react-native';
import MapMarker from './MapMarker';
import { AreaInterface } from '../interfaces/marker';

const NaverMap = () => {
  const [area, setArea] = useState<AreaInterface>({ minLat: 0, maxLat: 0, minLon: 0, maxLon: 0 });

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
      <MapMarker area={area} />
    </NaverMapView>
  );
};

export default NaverMap;
