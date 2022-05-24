import React from 'react';

import { View } from 'react-native';
import TitleBar from '../components/TitleBar';
import ServiceList from '../components/ServiceList';
import NaverMapView, { Circle, Marker, Path, Polygon, Polyline } from 'react-native-nmap/index';

const MainComponent = () => {
  return (
    <View>
      <TitleBar />
      <ServiceList />
      <View>
        <NaverMap />
      </View>
    </View>
  );
};

const NaverMap = () => {
  const P0 = { latitude: 37.564362, longitude: 126.977011 };
  const P1 = { latitude: 37.565051, longitude: 126.978567 };
  const P2 = { latitude: 37.565383, longitude: 126.976292 };
  const centerPoint = { latitude: 37.378595, longitude: 127.112724 };

  return (
    <NaverMapView
      style={{ width: '100%', height: '100%' }}
      showsMyLocationButton={true}
      center={{ ...centerPoint, zoom: 15 }}
      // onTouch={e => console.warn('onTouch', JSON.stringify(e.nativeEvent))}
      onCameraChange={e => console.warn('onCameraChange', JSON.stringify(e))}
      onMapClick={e => console.warn('onMapClick', JSON.stringify(e))}
    >
      <Marker coordinate={P0} onClick={() => console.warn('onClick! p0')} />
      <Marker coordinate={P1} pinColor="blue" onClick={() => console.warn('onClick! p1')} />
      <Marker coordinate={P2} pinColor="red" onClick={() => console.warn('onClick! p2')} />
      <Path coordinates={[P0, P1]} onClick={() => console.warn('onClick! path')} width={10} />
      <Polyline coordinates={[P1, P2]} onClick={() => console.warn('onClick! polyline')} />
      <Circle
        coordinate={P0}
        color={'rgba(255,0,0,0.3)'}
        radius={200}
        onClick={() => console.warn('onClick! circle')}
      />
      <Polygon
        coordinates={[P0, P1, P2]}
        color={'rgba(0, 0, 0, 0.5)'}
        onClick={() => console.warn('onClick! polygon')}
      />
    </NaverMapView>
  );
};

export default MainComponent;
