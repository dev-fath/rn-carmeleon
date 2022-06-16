import { MenuItemInterface } from '../../interfaces/menuItem';
import { ButtonPressInterface } from '../buttons/interface';
import { Dispatch, SetStateAction } from 'react';

export interface MenuItemPropsInterface extends MenuItemInterface, ButtonPressInterface {}

export interface ListViewPropsInterface {
  menuList: MenuItemInterface[];
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}
