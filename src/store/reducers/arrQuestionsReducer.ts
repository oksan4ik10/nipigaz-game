import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IArrQuestions {
  arrQuestions: Array<number | string>[];
}
const initialState: IArrQuestions = {
    arrQuestions: [[ 100, 200, 300, 400], [100, 200, 300, 400],[ 100, 200, 300, 400],[100, 200, 300, 400],],
};

export const arrQuestionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    removePoints(state, action: PayloadAction<number[]>) {
      state.arrQuestions[action.payload[0]][action.payload[1]] = 0;
    },
  },
});

export default arrQuestionsSlice.reducer;