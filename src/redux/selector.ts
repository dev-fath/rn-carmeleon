import { carmeleonState } from './store';
import { createSelector } from '@reduxjs/toolkit';

export const parkingSiteSelector = (state: carmeleonState) => state.parkingSites || [];
export const gasStationSelector = (state: carmeleonState) => state.gasStations || [];
export const carWashSpotSelector = (state: carmeleonState) => state.carWashSpots || [];
export const chargingSpotSelector = (state: carmeleonState) => state.chargingSpots || [];
export const centerPointSelector = (state: carmeleonState) =>
  state.centerPoint || {
    latitude: 37.378595,
    longitude: 127.112724,
  };

export const carmeleonSelector = createSelector(
  parkingSiteSelector,
  gasStationSelector,
  carWashSpotSelector,
  chargingSpotSelector,
  centerPointSelector,
  (state, items) => ({
    state,
    items,
  }),
);
