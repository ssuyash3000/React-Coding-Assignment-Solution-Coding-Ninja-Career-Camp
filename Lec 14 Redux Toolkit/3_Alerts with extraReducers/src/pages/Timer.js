import { TimerActions } from "../components/TimerActions";
import { Time } from "../components/Time";
import { useSelector } from "react-redux";
import { alertSelector } from "../redux/reducers/alertReducer";

export const Timer = () => {
  // get alert message here
  const { message } = useSelector(alertSelector);
  // create effect to reset alert message here

  return (
    <div className="page">
      {/* conditionally show the below div with alert message */}
      {message && <div className="alert">{message}</div>}
      <h1>Simple Timer</h1>
      <Time />
      <TimerActions />
    </div>
  );
};
