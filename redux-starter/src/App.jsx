import configureStore from "./store/configureStore";
import { bugAdded, bugRemoved, bugResolved} from "./store/bugs";

function App() {
  const store = configureStore();

  const unsubscribe = store.subscribe(() => {
    console.log("Store has changed.", store.getState());
  }); // return a function that remove listening process

  store.dispatch(bugAdded("Bug 1"));

  // unsubscribe(); // remove listenging or remove subscribe

  store.dispatch(bugAdded("Bug 2"));

  store.dispatch(bugRemoved(2));

  store.dispatch(bugResolved(1));

  return <></>;
}

export default App;
