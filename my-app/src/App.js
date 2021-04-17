import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import Card from "./Card";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" element={Home} />
        <Route path="/card" element={Card} />
      </Switch>
    </div>
  );
}
export default App;
