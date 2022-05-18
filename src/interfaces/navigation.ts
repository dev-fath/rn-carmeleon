import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Menu: { userId: string };
};

export type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type DefaultScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
export type DefaultScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
