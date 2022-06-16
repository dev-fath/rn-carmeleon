import { AreaInterface, MarkerCaptionInterface, MarkerTypesUnion } from '../../../interfaces/marker';
import { Dispatch, SetStateAction } from 'react';
import { Coord } from 'react-native-nmap';
import { FuelEnum, ServiceEnum } from '../../../redux/slice';

export interface MapMarkerPropsInterface {
  area: AreaInterface;
  zoomLevel: number;
  setZoomLevel: Dispatch<SetStateAction<number>>;
  setCenterPoint: Dispatch<SetStateAction<Coord>>;
}

export interface MapMarkerViewPropsInterface {
  area: AreaInterface;
  zoomLevel: number;
  serviceMarkerList: MarkerTypesUnion[];
  selectedService: ServiceEnum;
  selectedFuel: FuelEnum;
  pinColor: string;
  caption: MarkerCaptionInterface;
  coordinate: Coord;
}
