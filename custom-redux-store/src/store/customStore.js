import reducer from "../reducers/reducer";

const createStore = (reducer) => {
  let state = [];

  const getState = () => {
    return state;
  };

  const dispatch = (action) => {
    // Call reducer function to get new state
    // Notify state changes to subscribers
    state = reducer(state, action);
  }

  return {
    getState,
    dispatch
  };
};

export default createStore(reducer);
