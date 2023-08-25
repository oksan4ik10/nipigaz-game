import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IActive {
    points: number;
  }

const initialState: IActive = { points: 0 };

export const pointsSlice = createSlice({
  name: 'points',
  initialState,
  reducers: {
    setPoints(state, action: PayloadAction<number>) {
      state.points += action.payload;
    },
  },
});

export default pointsSlice.reducer;
export const { setPoints } = pointsSlice.actions;