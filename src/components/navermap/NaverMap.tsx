import React, { useState } from 'react';

import { Dimensions } from 'react-native';
import { AreaInterface } from '../../interfaces/marker';
import { Coord } from 'react-native-nmap';
import { setMarkerArea } from '../../util/navermap/getMarkerArea';
import NaverMapVAComponent from './NaverMap.view';
import { NaverMapPropsInterface } from './navermap.interface';

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
export default NaverMap;
