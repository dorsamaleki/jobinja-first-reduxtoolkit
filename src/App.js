const App = ({ store, incremented, decremented }) => {
  return (
    <div>
      <div>{store.getState().value}</div>
      <button onClick={(e) => store.dispatch(incremented())}>plus</button>
      <button onClick={(e) => store.dispatch(decremented())}>minus</button>
    </div>
  );
};

export default App;
