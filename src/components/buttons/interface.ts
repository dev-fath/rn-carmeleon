import { LoginMethodInterface } from '../../interfaces/login';

export interface ButtonPressInterface {
  onPress: () => void;
}

export interface LoginButtonPropsInterface extends LoginMethodInterface, ButtonPressInterface {}
