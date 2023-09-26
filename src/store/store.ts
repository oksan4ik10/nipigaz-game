import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import arrQuestionsReducer from './reducers/arrQuestionsReducer';
import activeQuestion from './reducers/activeQuestionReducer';
import points from './reducers/pointsReducer';
import checkAnswerReducer from './reducers/checkAnswerReducer';
import answersReducer from './reducers/answersReducer';


const rootReducer = combineReducers({
    arrQuestionsReducer,
    activeQuestion,
    points,
    checkAnswerReducer,
    answersReducer

});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;