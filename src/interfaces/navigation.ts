import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Menu: { userId: string };
};

export type DefaultScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Menu'>;
export type DefaultScreenRouteProp = RouteProp<RootStackParamList, 'Menu'>;
