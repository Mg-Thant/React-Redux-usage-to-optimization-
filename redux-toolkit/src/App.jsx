import { bugAdded } from "./store/bugs";
import store from "./store/configureStore";

function App() {
  console.log(store);
  store.dispatch(bugAdded({ description: "Bug 1" }));
  console.log(store.getState());

  return <></>;
}

export default App;
