import store from "./store/store";
import * as actions from "./store/actions";

function App() {
  const unsubscribe = store.subscribe(() => {
    console.log("Store has changed.", store.getState());
  }); // return a function that remove listening process

  store.dispatch(actions.bugAdded("Bug 1"));

  // unsubscribe(); // remove listenging or remove subscribe

  // store.dispatch(bugRemoved(1));

  store.dispatch(actions.bugResolved(1));

  return <></>;
}

export default App;
