export interface MarkerPointInterface {
  isBuy: boolean;
  isRecommend: boolean;
  lat: number;
  lon: number;
  name: string;
  optionTag: string[];
  price: number;
  rate?: unknown;
  targetType: number;
  uid: number;
  valetType: number;
}
