export interface MarkerPointInterface {
  isRecommend: boolean;
  lat: number;
  lon: number;
  rate: unknown;
  targetType: number;
  uid: number;
}

export interface ParkingSiteMarkerInterface extends MarkerPointInterface {
  isBuy?: boolean;
  name?: string;
  optionTag?: string[];
  price?: number;
  valetType?: number;
}

export interface EvChargerMarkerInterface extends MarkerPointInterface {
  statNm?: string;
  evType?: number;
  tags?: string[];
  availableStall?: unknown;
  updateTime?: unknown;
  stall?: unknown;
  evChargers?: { stat: number }[];
}

export interface GasStationMarkerInterface extends MarkerPointInterface {
  gasStationName?: string;
  brandCode?: string;
  Gasoline?: number | null;
  Diesel?: number | null;
  PremiumGasoline?: number | null;
  lpg?: number | null;
}

export interface CarWashMarkerInterface extends MarkerPointInterface {
  bookingCode?: unknown;
  carWashName?: string;
  carWashType?: string;
  timeTag?: string[];
  typeTag?: string[];
}

export interface AreaInterface {
  minLat: number;
  maxLat: number;
  minLon: number;
  maxLon: number;
}
