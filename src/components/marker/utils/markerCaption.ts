import { MarkerCaptionInterface, MarkerTypesUnion } from '../../../interfaces/marker';
import { FuelEnum } from '../../../redux/slice';
import { Align } from 'react-native-nmap';

export const getMarkerCaption = (marker: MarkerTypesUnion, selectedFuel: FuelEnum): MarkerCaptionInterface => {
  return {
    text: markerCaptionText(marker, selectedFuel),
    align: Align.Center,
    textSize: 12,
    maxZoom: 24,
    minZoom: 0,
    color: '#000',
  };
};

const markerCaptionText = (marker: MarkerTypesUnion, selectedFuel: FuelEnum) => {
  if (marker.targetType === 0) {
    // 주차장
    return 'price' in marker && marker?.price ? `${marker.price / 1000}천원` : '';
  }
  if (marker.targetType === 1) {
    // 충전소
    return 'evChargers' in marker
      ? `충전가능 ${marker.evChargers?.filter(charger => charger.stat === 2).length || 0}`
      : '';
  }
  if (marker.targetType === 2) {
    // 주유소
    switch (selectedFuel) {
      case FuelEnum.diesel:
        return (selectedFuel in marker ? marker[selectedFuel] : 0)?.toString();
      case FuelEnum.premiumGasoline:
        return (selectedFuel in marker ? marker[selectedFuel] : 0)?.toString();
      case FuelEnum.gasoline:
        return (selectedFuel in marker ? marker[selectedFuel] : 0)?.toString();
      case FuelEnum.lpg:
        return (selectedFuel in marker ? marker[selectedFuel] : 0)?.toString();
    }
  }
  if (marker.targetType === 3) {
    // 세차장
    return 'carWashType' in marker ? marker.carWashType : '';
  }
};
