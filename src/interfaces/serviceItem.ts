import { ServiceEnum } from '../redux/slice';

export interface ServiceItemInterface {
  iconName: string;
  name: string;
  title: ServiceEnum;
  color: string;
}
