import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pomodor from "./pages/Pomodor";
// import Calendar from "./pages/Calendar";
import Signup from "./components/SignUp/index";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/signup", "/signup"]}>
            <Signup />
          </Route>
          <Route exact path={["/pomodor", "/pomodor"]}>
            <Pomodor />
          </Route>
          {/* <Route exact path={["/calendar", "/calendar"]}>
            <Calendar />
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
