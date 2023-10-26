// define counter action constants here
export const INCREASE_COUNT = "Increase Count";
export const RESET_COUNT = "Reset Count";
export const DECREASE_COUNT = "Decrease Count";
// define counter action creators here
export const incCount = () => ({ type: INCREASE_COUNT });
export const resetCount = () => ({ type: RESET_COUNT });
export const decCount = () => ({ type: DECREASE_COUNT });
