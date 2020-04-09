import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pomodor from "./pages/Pomodor";
// import Calendar from "./pages/Calendar";
import SignUpLogin from "./components/Login";
import NoMatch from "./pages/NoMatch";
import Goals from "./pages/Goals";
import Nav from "./components/Nav";
import Soul from "./pages/Soul";
import userContext from './utils/userContext';

function App() {
  const [user, setUser] = useState();
  return (
    <Router>
      <userContext.Provider value={{ user: user, setUser: setUser }}>
        {/* // @Keeley - This is where we tie user and goal I think... ^^^ */}
        <Nav />
        <div className="page">
        <Switch>
          <Route exact path={["/","/signup"]}>
            <SignUpLogin />
          </Route>
          <Route exact path="/pomodor">
            <Pomodor />
          </Route>
            <Route exact path="/goals">
              <Goals />
            </Route>
            {/* <Route exact path="/calendar">
            <Calendar />
          </Route> */}
            <Route exact path="/mysoul">
              <Soul />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </userContext.Provider>
    </Router>
  );
}

export default App;
