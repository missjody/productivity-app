import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pomodor from "./pages/Pomodor";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/pomodor"]}>
            <Pomodor />
          </Route>
          {/* <Route exact path="/books/:id">
            <Detail />
          </Route> */}
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
