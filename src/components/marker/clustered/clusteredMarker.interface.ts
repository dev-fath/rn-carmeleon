import { AreaInterface, MarkerCaptionInterface, MarkerTypesUnion } from '../../../interfaces/marker';
import { Coord } from 'react-native-nmap';
import { Dispatch, SetStateAction } from 'react';

export interface ClusteredMarkerPropsInterface {
  area: AreaInterface;
  setZoomLevel: Dispatch<SetStateAction<number>>;
  zoomLevel: number;
  setCenterPoint: Dispatch<SetStateAction<Coord>>;
  serviceMarkerList: MarkerTypesUnion[];
}

export interface ClusteredMarkerViewPropsInterface {
  serviceMarkerList: MarkerTypesUnion[];
  area: AreaInterface;
  onClick: () => void;
  coordinate: Coord;
  caption: MarkerCaptionInterface;
}
