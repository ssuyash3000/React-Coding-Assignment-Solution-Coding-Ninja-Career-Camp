import { useSelector } from "react-redux";

export const Count = () => {
  const { count } = useSelector((state) => {
    console.log(state.counterReducer);
    return state.counterReducer;
  });
  return <b>{count}</b>;
};
