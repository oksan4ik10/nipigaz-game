import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IArrQuestions {
  arrQuestions: Array<number | string>[];
}
const initialState: IArrQuestions = {
    arrQuestions: [["деятельность", 100, 200, 300, 400], ["география", 100, 200, 300, 400],["цифры и даты", 100, 200, 300, 400],["работа у нас", 100, 200, 300, 400],],
};

export const searchSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    removePoints(state, action: PayloadAction<number[]>) {
      state.arrQuestions[action.payload[0]][action.payload[1]] = 0;
    },
  },
});

export default searchSlice.reducer;