import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IActive {
    activeQuestion: number[];
  }

const initialState: IActive = { activeQuestion: [0, 0] };

export const activeSlice = createSlice({
  name: 'active',
  initialState,
  reducers: {
    saveActive(state, action: PayloadAction<number[]>) {
      state.activeQuestion = action.payload;
    },
  },
});

export default activeSlice.reducer;
export const { saveActive } = activeSlice.actions;