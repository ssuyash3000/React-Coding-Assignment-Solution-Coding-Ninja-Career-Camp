import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// change the timer actions imports
// import { incrementTimer } from "../redux/actions/timerActions";
import { timerAction, timerSelector } from "../redux/reducers/timerReducer";

export const Time = () => {
  const dispatch = useDispatch();
  // change as per the store implementation
  const { isRunning, elapsedTime } = useSelector(timerSelector);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(timerAction.incrementTimer());
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning, dispatch]);

  return <b>{elapsedTime}</b>;
};
