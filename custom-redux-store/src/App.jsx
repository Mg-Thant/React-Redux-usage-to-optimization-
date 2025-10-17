import createStore from "./store/customStore"

function App() {
  let store = createStore();
  console.log(store)
  store.state = 1;
  console.log(store.getState())

  return (
    <>
      <h1>Custom Store</h1>
    </>
  )
}

export default App
