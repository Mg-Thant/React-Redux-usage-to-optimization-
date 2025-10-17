import reducer from "../reducers/reducer";

const createStore = (reducer) => {
  let state = [];
  let listeners = [];

  const getState = () => {
    return state;
  };

  const dispatch = (action) => {
    // Call reducer function to get new state
    // Notify state changes to subscribers
    state = reducer(state, action);

    for(let i = 0; i < listeners.length; i++) {
        listeners[i]();
    }
  }

  const subscribe = (listener) => {
    listeners.push(listener);
  }

  return {
    getState,
    dispatch,
    subscribe
  };
};

export default createStore(reducer);
