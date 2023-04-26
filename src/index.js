import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/state";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = () => {
  root.render(
    <BrowserRouter>
      <App
        state={store.getState()}
        updateNewPost={store.updateNewPost.bind(store)}
        addPost={store.addPost.bind(store)}
      />
    </BrowserRouter>
  );
};

rerenderEntireTree();
store.subscribe(rerenderEntireTree);
