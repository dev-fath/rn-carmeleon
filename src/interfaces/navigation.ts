import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Menu: { userId: string };
};

export type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type DefaultScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
export type DefaultScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

export type MenuStackParamList = {
  Payment: undefined;
  Car: undefined;
  History: undefined;
  Reviews: undefined;
  Event: undefined;
  Favorites: undefined;
  Questions: undefined;
  Notice: undefined;
  Settings: undefined;
  Qrla: undefined;
};

export type MenuProps = NativeStackNavigationProp<MenuStackParamList, 'Payment'>;
export type MenuScreenNavigationProp = NativeStackNavigationProp<MenuStackParamList, 'Payment'>;
export type MenuScreenRouteProp = RouteProp<MenuStackParamList, 'Payment'>;
