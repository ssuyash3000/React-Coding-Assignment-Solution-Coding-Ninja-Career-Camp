// remove the timer action creators imports
import { createSlice } from "@reduxjs/toolkit";
// import {
//   INCREMENT_TIMER,
//   PAUSE_TIMER,
//   RESET_TIMER,
//   START_TIMER
// } from "../actions/timerActions";

const INITIAL_STATE = { isRunning: false, elapsedTime: 0 };

// refactor to use the createSlice method
const timerSlice = createSlice({
  name: "timer",
  initialState: INITIAL_STATE,
  reducers: {
    startTimer: (state) => {
      state.isRunning = true;
    },
    resetTimer: (state) => {
      state.isRunning = false;
      state.elapsedTime = 0;
    },
    pauseTimer: (state) => {
      state.isRunning = false;
    },
    incrementTimer: (state) => {
      state.elapsedTime += 1;
    },
  },
});
// export const timerReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case START_TIMER:
//       return { ...state, isRunning: true };
//     case PAUSE_TIMER:
//       return { ...state, isRunning: false };

//     case RESET_TIMER:
//       return { isRunning: false, elapsedTime: 0 };
//     case INCREMENT_TIMER:
//       return { ...state, elapsedTime: ++state.elapsedTime };
//     default:
//       return state;
//   }
// };

// export the timer reducer function and action creators here
//reducer
export const timerReducer = timerSlice.reducer;
//action
export const timerAction = timerSlice.actions;
//selector
export const timerSelector = (state) => {
  //console.log(state.timerReducer);
  return state.timerReducer;
};
