import { ServiceEnum } from '../../../redux/slice';
import { ColorTheme } from '../../../../assets/colorCodes';

export const getMarkerColor = (selectedService: ServiceEnum) => {
  switch (selectedService) {
    case ServiceEnum.carWashSpot:
      return ColorTheme.CarWash;
    case ServiceEnum.chargingSpot:
      return ColorTheme.Charger;
    case ServiceEnum.gasStation:
      return ColorTheme.GasStation;
    case ServiceEnum.parkingSite:
      return ColorTheme.Main;
  }
};
