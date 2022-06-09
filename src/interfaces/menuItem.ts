import { MenuStackParamList } from './navigation';
import { Dispatch, SetStateAction } from 'react';

export interface MenuItemInterface {
  icon: string;
  name: keyof MenuStackParamList;
  title: string;
  needAuth: boolean;
  modalVisible?: boolean;
  setModalVisible?: Dispatch<SetStateAction<boolean>>;
}
