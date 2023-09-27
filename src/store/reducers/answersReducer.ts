import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface answer {
    checkAnswer?: boolean;
    answer: string;
    correct: boolean;
    
}
export interface IArrQuestions {
    arrAnswers: Array<answer>[];
}
const initialState: IArrQuestions = {
    arrAnswers: [[ {
        checkAnswer: false,
        answer: "2",
        correct: false
        
    }, {
        checkAnswer: false,
        answer: "2",
        correct: false
        
    }, {
        checkAnswer: false,
        answer: "123",
        correct: false
        
    }, {
        checkAnswer: false,
        answer: "2",
        correct: false
        
    }], [ {
        checkAnswer: false,
        answer: "1",
        correct: false
        
    }, {
        checkAnswer: false,
        answer: "3",
        correct: false
        
    }, {
        checkAnswer: false,
        answer: "180",
        correct: false
        
    }, {
        checkAnswer: false,
        answer: "2",
        correct: false
        
    }],
    [ {
        checkAnswer: false,
        answer: "50",
        correct: false
        
    }, {
        checkAnswer: false,
        answer: "1",
        correct: false
        
    }, {
        checkAnswer: false,
        answer: "2",
        correct: false
        
    }, {
        checkAnswer: false,
        answer: "37",
        correct: false
        
    }],
    [ {
        checkAnswer: false,
        answer: "1234",
        correct: false
        
    }, {
        checkAnswer: false,
        answer: "0",
        correct: false
        
    }, {
        checkAnswer: false,
        answer: "2",
        correct: false
        
    }, {
        checkAnswer: false,
        answer: "true true true false",
        correct: false
        
    }],]
};
export interface IAnswerUser {
    arrAnswer: number[];
    answerInfo: answer;
}
export const arrQuestionsSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    addAnswer(state, action: PayloadAction<IAnswerUser>) {
        const {arrAnswer, answerInfo} = action.payload;
        state.arrAnswers[arrAnswer[0]][arrAnswer[1]].checkAnswer = true;
        state.arrAnswers[arrAnswer[0]][arrAnswer[1]].correct = answerInfo.correct;
    }
  },
});

export default arrQuestionsSlice.reducer;
export const { addAnswer } = arrQuestionsSlice.actions;