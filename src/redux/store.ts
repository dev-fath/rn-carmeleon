import { configureStore } from '@reduxjs/toolkit';
import { carmeleonSlice } from './slice';

export const carmeleonStore = configureStore({
  reducer: carmeleonSlice.reducer,
});
export type carmeleonState = ReturnType<typeof carmeleonStore.getState>;
export type carmeleonDispatch = typeof carmeleonStore.dispatch;
