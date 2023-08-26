import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type TStateAnswer = "true" | "false" | "wait";
export interface ICheckAnswer {
    checkAnswer: TStateAnswer;
  }


const initialState: ICheckAnswer = { checkAnswer: "wait" };

export const checkAnswerSlice = createSlice({
  name: 'checkAnswer',
  initialState,
  reducers: {
    setCheckAnswer(state, action: PayloadAction<TStateAnswer>) {
      state.checkAnswer = action.payload;
    },
  },
});

export default checkAnswerSlice.reducer;
export const { setCheckAnswer } = checkAnswerSlice.actions;