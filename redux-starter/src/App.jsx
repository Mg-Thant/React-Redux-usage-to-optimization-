import store from "./store/store";
import { bugAdded, bugRemoved, bugResolved } from "./actions/actions";

function App() {
  const unsubscribe = store.subscribe(() => {
    console.log("Store has changed.", store.getState());
  }); // return a function that remove listening process

  store.dispatch(bugAdded("Bug 1"));

  // unsubscribe(); // remove listenging or remove subscribe

  // store.dispatch(bugRemoved(1));

  store.dispatch(bugResolved(1));

  return <></>;
}

export default App;
