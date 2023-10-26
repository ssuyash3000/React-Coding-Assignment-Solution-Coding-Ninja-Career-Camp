// define action constants here
export const INCREMENT_TIMER = "Increment Timer";
export const PAUSE_TIMER = "Pause Timer";
export const RESET_TIMER = "Reset Timer";
export const START_TIMER = "Start Timer";
// define action creators here

export const resetTimer = () => {
  return { type: RESET_TIMER };
};
export const pauseTimer = () => ({ type: PAUSE_TIMER });
export const startTimer = () => {
  return { type: START_TIMER };
};
export const incrementTimer = () => ({ type: INCREMENT_TIMER });
