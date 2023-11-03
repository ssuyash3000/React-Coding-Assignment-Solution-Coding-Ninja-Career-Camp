// create and export middleware function here
export const loggerMiddleware = (store) => {
  return (next) => {
    return (action) => {
      //console.log(action.type);
      next(action);
      console.log(store.getState());
    };
  };
};
