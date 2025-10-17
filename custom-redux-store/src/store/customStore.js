const createStore = () => {
  let state;

  const getState = () => {
    return state;
  };

  return {
    getState
  };
};

export default createStore;
