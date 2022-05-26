import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Coord } from 'react-native-nmap';

export const enum ServiceEnum {
  parkingSite = 'parking site',
  chargingSpot = 'charging spot',
  carWashSpot = 'carWash spot',
  gasStation = 'gas station',
}

const initialState: InitialStateInterface = {
  carWashSpots: [],
  chargingSpots: [],
  gasStations: [],
  parkingSites: [],
  centerPoint: { latitude: 37.378595, longitude: 127.112724 },
  selectedService: ServiceEnum.parkingSite,
};
export const carmeleonSlice = createSlice({
  name: 'carmeleonSlice',
  initialState: initialState,
  reducers: {
    carWashSpots: (state, action: PayloadAction<unknown[]>) => {
      state.carWashSpots = action.payload;
    },
    chargingSpots: (state, action: PayloadAction<unknown[]>) => {
      state.chargingSpots = action.payload;
    },
    gasStations: (state, action: PayloadAction<unknown[]>) => {
      state.gasStations = action.payload;
    },
    parkingSites: (state, action: PayloadAction<unknown[]>) => {
      state.parkingSites = action.payload;
    },
    centerPoint: (state, action: PayloadAction<Coord>) => {
      state.centerPoint = action.payload;
    },
  },
});

export const { carWashSpots, chargingSpots, gasStations, parkingSites, centerPoint } = carmeleonSlice.actions;

export type carmeleonReducers = ReturnType<typeof carmeleonSlice.reducer>;
export default carmeleonSlice.reducer;

interface InitialStateInterface {
  parkingSites: unknown[];
  chargingSpots: unknown[];
  carWashSpots: unknown[];
  gasStations: unknown[];
  centerPoint: Coord;
  selectedService: ServiceEnum;
}
