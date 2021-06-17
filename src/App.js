import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Homepage from "./page/Homepage";
import Menu1 from "./componenta/Menu1";
import Navbar from "./componenta/Navbar";
import Menu2 from "./componenta/Menu2";
import Menu3 from "./componenta/Menu3";

import "./sass/main.scss"

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage}/>
          <Route path="/menu1" exact component={Menu1}/>
          <Route path="/menu2" exact component={Menu2}/>
          <Route path="/menu3" exact component={Menu3}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
