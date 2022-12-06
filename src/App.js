import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Teste from "./Pages/teste";

function App() {
  return (
    <BrowserRouter forceRefresh={true}>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/home" exact component={Home} />
        <Route path="/teste" exact component={Teste} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
