import { Coord } from 'react-native-nmap';
import { AreaInterface } from '../../interfaces/marker';
import { Dispatch, SetStateAction } from 'react';

export interface NaverMapPropsInterface {
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
  mapMarkerProps: NaverMapMarkerPropsInterface;
  markerAreas: AreaInterface[];
}

export interface NaverMapMarkerPropsInterface {
  zoomLevel: number;
  setZoomLevel: Dispatch<SetStateAction<number>>;
  setCenterPoint: Dispatch<SetStateAction<Coord>>;
}
