import { Dispatch, SetStateAction } from 'react';

export interface TitleBarViewPropsInterface {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  isAuthenticated: boolean;
  onPress: () => void;
}
