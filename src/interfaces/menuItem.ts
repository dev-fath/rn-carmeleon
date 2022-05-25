import { MenuStackParamList } from './navigation';

export interface MenuItemInterface {
  icon: string;
  name: keyof MenuStackParamList;
  title: string;
}
