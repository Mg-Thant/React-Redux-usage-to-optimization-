import store from "./store/customStore";
import * as actions from "./actions/actions";

function App() {
  console.log(store);
  store.state = 1;
  console.log(store.getState());
  store.dispatch(actions.bugAdded("Bug 1"));
  console.log(store.getState());

  return (
    <>
      <h1>Custom Store</h1>
    </>
  );
}

export default App;
