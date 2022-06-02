import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Coord } from 'react-native-nmap';
import {
  CarWashMarkerInterface,
  EvChargerMarkerInterface,
  GasStationMarkerInterface,
  ParkingSiteMarkerInterface,
} from '../interfaces/marker';

export const enum ServiceEnum {
  parkingSite = 'parking site',
  chargingSpot = 'charging spot',
  carWashSpot = 'carWash spot',
  gasStation = 'gas station',
}

export const enum FuelEnum {
  gasoline = 'Gasoline',
  premiumGasoline = 'PremiumGasoline',
  diesel = 'Diesel',
  lpg = 'lpg',
}

const initialState: InitialStateInterface = {
  carWashSpots: [],
  chargingSpots: [],
  gasStations: [],
  parkingSites: [],
  centerPoint: { latitude: 37.378595, longitude: 127.112724 },
  selectedService: ServiceEnum.parkingSite,
  selectedFuel: FuelEnum.gasoline,
};
export const carmeleonSlice = createSlice({
  name: 'carmeleonSlice',
  initialState: initialState,
  reducers: {
    carWashSpots: (state, action: PayloadAction<CarWashMarkerInterface[]>) => {
      state.carWashSpots = action.payload;
    },
    chargingSpots: (state, action: PayloadAction<EvChargerMarkerInterface[]>) => {
      state.chargingSpots = action.payload;
    },
    gasStations: (state, action: PayloadAction<GasStationMarkerInterface[]>) => {
      state.gasStations = action.payload;
    },
    parkingSites: (state, action: PayloadAction<ParkingSiteMarkerInterface[]>) => {
      state.parkingSites = action.payload;
    },
    centerPoint: (state, action: PayloadAction<Coord>) => {
      state.centerPoint = action.payload;
    },
    selectedService: (state, action: PayloadAction<ServiceEnum>) => {
      state.selectedService = action.payload;
    },
    selectedFuel: (state, action: PayloadAction<FuelEnum>) => {
      state.selectedFuel = action.payload;
    },
  },
});

export const { carWashSpots, chargingSpots, gasStations, parkingSites, centerPoint, selectedService, selectedFuel } =
  carmeleonSlice.actions;

export type carmeleonReducers = ReturnType<typeof carmeleonSlice.reducer>;
export default carmeleonSlice.reducer;

interface InitialStateInterface {
  parkingSites: ParkingSiteMarkerInterface[];
  chargingSpots: EvChargerMarkerInterface[];
  carWashSpots: CarWashMarkerInterface[];
  gasStations: GasStationMarkerInterface[];
  centerPoint: Coord;
  selectedService: ServiceEnum;
  selectedFuel: FuelEnum;
}
