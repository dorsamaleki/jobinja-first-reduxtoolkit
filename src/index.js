import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import App from "./App";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

export const { incremented, decremented } = counterSlice.actions;

const store = configureStore({ reducer: counterSlice.reducer });

const root = ReactDOM.createRoot(document.getElementById("root"));

const renderApp = () => {
  root.render(
    <App store={store} incremented={incremented} decremented={decremented} />
  );
};

renderApp();
store.subscribe(renderApp);
