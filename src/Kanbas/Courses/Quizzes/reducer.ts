import { createSlice } from "@reduxjs/toolkit";
const initialState = {
 quizzes: [],
 quiz: {},
};
const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
    },
    setQuiz: (state, action) => {
      state.quiz = action.payload;
    }
  },
});
export const { setQuizzes, setQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
