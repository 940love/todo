import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import TodoPage from "./pages/TodoPage";
import CompletePage from "./pages/CompletePage";
function App() {
  return (
    <>
      <Route component={TodoPage} path={["/", "/todos"]} exact />
      <Route component={CompletePage} path={["/complete:title?"]} />
    </>
  );
}

export default App;
